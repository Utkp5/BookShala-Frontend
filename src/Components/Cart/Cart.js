import React from 'react'
import Navbar from "../Navbar/Navbar"
import { useCart } from 'react-use-cart'
import "./Cart.css"
import { useState } from 'react'
import Swal from 'sweetalert2';
import axios from 'axios';

function Cart() {

  const  {
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
 
  // payment gatway

  const [bpayment,setbpayment] = useState({
    price : {cartTotal}
  });


  const initPayment = (data) => {
    const options = {
      key: process.env.KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: bpayment.bookTitle,
      description: "Pay to Pandit Utkarsh",
      order_id: data._id,
      handler: async (response) => {
        try {
          const verifyUrl = "http://localhost:5000/api/payment/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
          Swal.fire({
            text: 'Your Booking has been Confirmed',
            imageUrl: 'https://cdn.dribbble.com/users/911154/screenshots/3332845/vfmov3.gif',
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: 'Custom image',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/";
            }
          })
        } catch (error) {
          console.log(error);
        }
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };




  const paymentHandle = async () => {

    try {
      const orderUrl = "http://localhost:5000/api/payment/orders";
		  const { data } = await axios.post(orderUrl, { amount: bpayment.price});
		  console.log(data);
		  initPayment(data.data);
    } catch (error) {
      console.log(error);
    }

  }

  // payment gatway


  return (
    
    <div>
      <Navbar />
      <table>
          <tr>
            <th colSpan={6} className="main_th">Your Cart</th>
          </tr>
          <tr className='head'>
            <th>Book img</th>
            <th>Book title</th>
            <th>Book price ₹</th>
            <th>Total quantity</th>
            <th>Book quantity</th>
            <th>Book remove</th>
          </tr>
          {
            items.map((item,id) => {
              return (
                <tr>
                  <td className='td_img'><img src={item.bookImg} alt="" /></td>
                  <td>{item.bookTitle}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                  <button className='cart_btn' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}> - </button>&nbsp;&nbsp;
                  <button className='cart_btn' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}> + </button>
                  </td>
                  <td><button className='cart_btn_remove' onClick={() => removeItem(item.id)}>&times;</button></td>
                </tr>
              )
            })
          }
      </table>
      {!isEmpty && 
        <tr>
            <td><h4>Total price ₹ : {cartTotal}</h4></td>
            <td>
            <button className='cart_clr_btn' onClick={() => emptyCart() }>Clear cart</button>
            <button className='cart_payment_btn' onClick={paymentHandle}>Clear Payment</button>
            </td>
        </tr>
      }

    </div>
  )
}

export default Cart

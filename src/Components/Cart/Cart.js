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
      key: 'rzp_test_wozmO8VRB0IT0q',
      amount: Number(data.amount) * 100,
      currency: data.currency,
      name: 'Bookshala',
      description: "Pay to Bookshala",
      order_id: data._id,
      handler: async (response) => {
        console.log(response,"5");
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };




  const paymentHandle = async (amount) => {

    try {
      const _data = {amount : amount}
      const orderUrl = "http://localhost:5000/api/payment/orders";
		  const { data } = await axios.post(orderUrl, _data);
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
            <button className='cart_payment_btn' onClick={() => paymentHandle(cartTotal)}>Clear Payment</button>
            </td>
        </tr>
      }

    </div>
  )
}

export default Cart

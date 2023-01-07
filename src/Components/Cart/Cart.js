import React from 'react'
import Navbar from "../Navbar/Navbar"
import { useCart } from 'react-use-cart'
import "./Cart.css"

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
            <button className='cart_payment_btn'>Clear Payment</button>
            </td>
        </tr>
      }

    </div>
  )
}

export default Cart

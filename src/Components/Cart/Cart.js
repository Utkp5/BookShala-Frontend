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

   if (isEmpty) 
   {
    <p>Your cart is empty</p> 
   }   

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
                  <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}> - </button>&nbsp;&nbsp;
                  <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}> + </button>
                  </td>
                  <td><button onClick={() => removeItem(item.id)}>&times;</button></td>
                </tr>
              )
            })
          }
      </table>

    </div>
  )
}

export default Cart

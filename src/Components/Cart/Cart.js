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
            <th>Book img</th>
            <th>Book title</th>
            <th>Book price</th>
            <th>Total quantity</th>
            <th>Book quantity</th>
            <th>Book remove</th>
          </tr>
          {
            items.map((item,id) => {
              return (
                <tr>
                  <td><img src={item.bookImg} alt="" /></td>
                  <td>{item.bookTitle}</td>
                  <td>{item.price}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              )
            })
          }
      </table>

    </div>
  )
}

export default Cart

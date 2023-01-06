import React from 'react'
import Navbar from "../Navbar/Navbar"
import { useCart } from 'react-use-cart'

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

      <div>
       {isEmpty ? 'Your cart is empty' : `Your products`}
      </div>

    </div>
  )
}

export default Cart

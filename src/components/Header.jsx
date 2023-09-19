import { RiShoppingCartFill } from "react-icons/ri";

import React, { useContext } from 'react'
import { CartContext } from "../contexts/cart-context";


const Header = () => {
  const data = useContext(CartContext)
  return (
    <div className='header bg-[#645CFF] text-4xl flex justify-around items-center py-5'>
      <h4 className='text-white'>UseContext</h4>
      <div className="flex gap-x-2 justify-center items-center">
        <RiShoppingCartFill className='text-white cursor-pointer' />
        <span className="text-white text-2xl">({data.cart.length})</span>
      </div>
    </div>
  )
}

export default Header
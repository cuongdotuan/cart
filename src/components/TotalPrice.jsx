import React, { useContext } from 'react'
import { CartContext } from '../contexts/cart-context'

const TotalPrice = () => {
    const data = useContext(CartContext)
    const { cart } = data

    const totalPrice = cart.reduce((current, item) => {
        const price = current + item.price * item.quantity
        return price
    }, 0)
    return (
        <div className='flex justify-between items-center border-t-2 border-neutral-300 py-5 text-xl mt-12'>
            <div>Total</div>
            <div className='py-2 px-2 rounded-md bg-[#645CFF] text-white'>$ {totalPrice.toFixed(2)}</div>
        </div>
    )
}

export default TotalPrice
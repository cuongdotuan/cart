import React, { useContext } from 'react'
import CartList from './CartList'
import { CartContext } from '../contexts/cart-context'
import TotalPrice from './TotalPrice'


const Cart = () => {
    const data = useContext(CartContext)
    const { cart, setCart } = data
    const handleClearCart = () => {
        const confirmClear = confirm("do you want to clear cart list?")
        if (confirmClear)
            setCart([])
    }

    return (
        <div className='container max-w-screen-md mx-auto my-0 py-10 mt-10'>
            <h1 className='text-4xl mb-12 text-center'>CART LIST</h1>
            {cart.length === 0
                ? <div className='text-3xl text-center text-gray-400'>Empty Cart</div>
                : <>
                    <CartList />
                    <TotalPrice />
                    <div className='text-center'>
                        <button className='bg-[#645CFF] px-2 py-1 text-white rounded-md'  onClick={handleClearCart}>Clear Cart</button>
                    </div>
                </>
            }

        </div>
    )
}

export default Cart
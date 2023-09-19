import React, { useContext } from 'react'
import { CartContext } from '../contexts/cart-context'
import CartItem from './CartItem'

const CartList = () => {
    const data = useContext(CartContext)
    console.log(data)
    return (
        <>
            {data.cart.map(item =>
                <CartItem key={item.id} product={item} />
            )}

        </>
    )
}

export default CartList
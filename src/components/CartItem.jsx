import React, { useContext } from 'react'
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { CartContext } from '../contexts/cart-context';

const CartItem = ({ product }) => {
    const { id, name, price, avatar, quantity } = product

    const data = useContext(CartContext)
    const { cart, setCart } = data

    const increase = (id) => {
        const newCart = [...cart]
        const product = newCart.find(item => item.id === id)
        if (!product) return

        product.quantity = product.quantity + 1
        setCart(newCart)
    }
    const decrease = (id) => {
        const newCart = [...cart]
        const product = newCart.find(item => item.id === id)
        if (!product) return

        if (product.quantity === 1) {
            handleRemove(id)
            return
        }
        product.quantity = product.quantity - 1
        setCart(newCart)

    }

    const handleRemove = (id) => {
        const confirmRemove = confirm('Do you want to remove this product?')
        if (!confirmRemove) return

        const filteredCart = cart.filter((item) => item.id !== id)
        setCart(filteredCart)
    }
    return (
        <div className='flex justify-between my-4'>

            <div className='flex gap-x-6'>
                <div className='w-20'><img src={avatar} alt="" /></div>

                <div>
                    <p className='text-xl font-semibold'>{name}</p>
                    <p>$ {price}</p>
                    <p className='text-[#645CFF] cursor-pointer' onClick={() => handleRemove(id)}>remove</p>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <button  onClick={() => increase(id)}><FiChevronUp className='text-[#645CFF]  text-3xl' /></button>
                <p className='text-xl'>{quantity}</p>
                <button onClick={() =>decrease(id)}><FiChevronDown className='text-[#645CFF]  text-3xl'  /></button>
            </div>
        </div>
    )
}

export default CartItem
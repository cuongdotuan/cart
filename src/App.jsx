import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RiShoppingCartFill } from "react-icons/ri";
import Header from './components/Header';
import Cart from './components/Cart';
import { CartContext } from './contexts/cart-context';
import TotalPrice from './components/TotalPrice';

const data = [
  {
    id: 1,
    name: "SamSung Galaxy S8",
    price: 399.99,
    avatar: "https://www.course-api.com/images/cart/phone-1.png",
    quantity: 1
  },
  {
    id: 2,
    name: "Google Pixel",
    price: 499.99,
    avatar: "https://www.course-api.com/images/cart/phone-2.png",
    quantity: 1
  },
  {
    id: 3,
    name: "Xiaomi Redmi Note 2",
    price: 699.99,
    avatar: "https://www.course-api.com/images/cart/phone-3.png",
    quantity: 1
  },
  {
    id: 4,
    name: "SamSung Galaxy S7",
    price: 599.99,
    avatar: "https://www.course-api.com/images/cart/phone-4.png",
    quantity: 1
  },
]

function App() {
  const [listItem, setListItem] = useState(data)


  return (
    <>
      <CartContext.Provider value={{
        cart: listItem,
        setCart: setListItem,
      }}>

        <Header />
        <Cart />
        

      </CartContext.Provider>

    </>
  )
}

export default App

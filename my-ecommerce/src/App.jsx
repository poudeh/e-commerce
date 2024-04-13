import React, { useEffect, useContext, useState } from 'react'
import Categories from "./Components/Categories";
import Products from "./Components/Products";
import Toast from "./Components/Toast";
import Searchbar from './Components/Searchbar';
import Selector from './Components/Selector';
import { shopItemsContext } from './context/ShopContext';


export default function App() {
  const { cartItems, setCartItems , mainCategory } = useContext(shopItemsContext)

  useEffect(() => {
    if (cartItems.length) {
      let items = JSON.parse(localStorage.getItem('cartItems'))
      setCartItems(items)
    }

  }, [])

  return (
    <>
      <div className='dark:bg-slate-900 h-screen '>
        <Categories />
        <Searchbar />
        <div className="pt-[69px] container ">
        {
          mainCategory == 'All' && <Selector />
        }
          <Products />
        </div>
        <Toast />
      </div>

    </>


  )
}
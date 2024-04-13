import React, { useContext, useEffect, useState, useRef } from 'react'
import { Basketitem } from '../Components/Basketitem'
import Basketalert from '../Components/Basketalert'
import { shopItemsContext } from '../context/ShopContext'
import { styles } from '../tailwindStyle'
import { Link } from 'react-router-dom'

export default function BasketItems() {
    const { cartItems, setCartItems } = useContext(shopItemsContext)
    const [totalPrice, setTotalPrice] = useState(0)
    let totalPriceRef = useRef()

    useEffect(() => {
        let initialCartItems = JSON.parse(localStorage.getItem('cartItems'))
        setCartItems(initialCartItems)

    }, [])





    useEffect(() => {
        console.log(totalPriceRef);
        let totalPriceHandler = 0
        cartItems.forEach(cartItem => {
            totalPriceHandler += cartItem.buyCount * cartItem.price
        })
        console.log(cartItems);
        totalPriceRef.current.textContent = totalPriceHandler.toFixed(2)




    }, [cartItems])


    return (
        <div>
            <div className="h-screen bg-gray-100 pt-20">
                <h1 className="mb-10 text-center  text-2xl font-bold">
                    Cart Items
                </h1>
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div className="rounded-lg md:w-2/3">
                        {
                            cartItems.length ? (
                                <>
                                    {
                                        cartItems.map(cartItem => (
                                            <Basketitem {...cartItem} />
                                        ))
                                    }
                                </>) : (<>
                                    <Basketalert />
                                </>)
                        }


                    </div>
                    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">

                        <hr className="my-4" />
                        <div className="flex justify-between">
                            <p className="text-lg font-bold">
                                Total
                            </p>
                            <div className="">
                                <p ref={totalPriceRef} className="mb-1 text-lg font-bold">
                                    ${totalPrice} USD
                                </p>
                                <p className="text-sm text-gray-700">
                                    including VAT
                                </p>
                            </div>
                        </div>
                        <button className={styles.checkoutbtn}>
                            Check out
                        </button>
                        <Link to={'/'} className={`${styles.checkoutbtn} bg-yellow-500 hover:bg-yellow-600`}>
                            Continue shopping
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

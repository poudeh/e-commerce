import React, { useContext , useEffect } from 'react'
import { shopItemsContext } from '../context/ShopContext';

export const Basketitem = ({ id, buyCount, description, image, price, title }) => {
    const { cartItems, setCartItems } = useContext(shopItemsContext)
    function changeHandler(event) {
        let newCartItems = cartItems.map(cartItem => {
            if (cartItem.id == id) {
                cartItem.buyCount = event.target.value

            }
            return cartItem
        })
        setCartItems(newCartItems)

    }

    const removeItemHandler = (itemID) => {
        let newCartItems = cartItems.filter(cartItem => {
            return cartItem.id !== itemID

        })
        setCartItems(newCartItems)


    }



    return (
        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img
                alt="product-image"
                className="w-full rounded-lg sm:w-40"
                src={image}
            />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">
                        {title}
                    </h2>
                    <p className="mt-1 text-xs text-gray-700">
                        ${price}
                    </p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100">
                        <input
                            className="h-8 w-8 border bg-white text-center text-xs outline-none"
                            defaultValue={buyCount}
                            min="1"
                            type="number"
                            onChange={e => changeHandler(e)}
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <p className="text-sm">
                            {Math.round(price * buyCount * 100) / 100}$
                        </p>
                        <svg
                            className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={() => removeItemHandler(id)}
                        >
                            <path
                                d="M6 18L18 6M6 6l12 12"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

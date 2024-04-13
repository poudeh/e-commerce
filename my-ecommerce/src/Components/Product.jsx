import React, { memo, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { styles } from '../tailwindStyle'
import { shopItemsContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const Product = memo(({ id, title, price, description, image, rating }) => {
    const { shopItems, cartItems, setCartItems, filterItems, saveItemsToLocalStorage, isShowToast, setIsShowToast } = useContext(shopItemsContext)
    const [yellowStars, setYellowStars] = useState([])
    const [whiteStars, setWhiteStars] = useState([])
    useEffect(() => {
        let yellowStars = Math.round(rating.rate)
        let whiteStars = 5 - yellowStars
        let yellowStarsArray = Array.from(Array(yellowStars).keys())
        let whiteStarsArray = Array.from(Array(whiteStars).keys())

        setYellowStars(yellowStarsArray)
        setWhiteStars(whiteStarsArray)


    }, [shopItems, filterItems])


    const addProductToCard = (productID) => {
        let findMainItem = shopItems.find(shopItem => {
            return shopItem.id == productID
        })
        let addToCardItem = { ...findMainItem, buyCount: 1 }
        let isItemInBasket = cartItems.some(cartItem => {
            return cartItem.id == addToCardItem.productID
        })
        if (isItemInBasket) {
            console.log('it is in the basket');
            let newcartItems = cartItems.map(cartItem => {
                if (cartItem.id == addToCardItem.productID) {
                    cartItem.buyCount += 1
                }
                return cartItem
            })
            setCartItems(newcartItems)
        } else {
            setCartItems(prevState => {
                return [...prevState, addToCardItem]
            })
        }
    }
    useEffect(()=> {
        saveItemsToLocalStorage(cartItems)
    }, [cartItems])
    return (
        <div class=" w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto ">
            <Link to={`/details/${id}`} className=" h-96 w-[350px] block">
                <img class="productImg " src={image} alt="product image" />
            </Link>
            <div class="px-5 pb-5">
                <Link to={`/details/${id}`} className=' h-12 block'>
                    <h5 class="text-xl line-clamp-2 font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </Link>
                <div class="flex items-center mt-2.5 mb-5">
                    <div class="flex items-center space-x-1 rtl:space-x-reverse">
                        {
                            yellowStars.map(star => (
                                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            ))
                        }
                        {
                            whiteStars.map(star => (
                                <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            ))
                        }
                    </div>
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{rating.rate}</span>
                </div>
                <div class="flex items-center justify-between ">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                    <a onClick={() => {
                        addProductToCard(id)
                        setIsShowToast(true)
                        setTimeout(() => {
                            setIsShowToast(false)

                        }, [3000])


                    }} href="#" class={styles.navbtn}>Add to cart</a>
                </div>
            </div>
        </div>)
})

export default Product
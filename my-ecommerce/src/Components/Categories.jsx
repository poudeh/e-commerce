import React, { useContext, useState, useEffect } from 'react'
import { styles } from '../tailwindStyle'
import { shopItemsContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

export default function Categories() {
    const { mainCategory, setMainCategory } = useContext(shopItemsContext)
    const { filterItems, setFilterItems } = useContext(shopItemsContext)

    const { shopItems, cartItems } = useContext(shopItemsContext)
    const allCategories = ['All', ...new Set(shopItems.map(item => item.category))]
    console.log('cartItems are' , cartItems);

    function categoryHandler(category) {
        setMainCategory(category)

    }

    useEffect(() => {
        if (mainCategory == 'All') {
            setFilterItems(shopItems)
        } else {
            let filteringItems = shopItems.filter(shopItem => {
                return shopItem.category == mainCategory
            })
            console.log('filtering items are', filteringItems);
            setFilterItems(filteringItems)


        }

    }, [mainCategory])



    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a
                    href="#"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                    onClick={()=>setMainCategory('All')}
                >
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="h-8"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Store
                    </span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <Link to='/basket' className='bag-icon'>
                        <span>{cartItems.length}</span>
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="bag-icon w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </Link>
                </div>
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul className={styles.ul}>
                        {
                            allCategories.map(category => (
                                <li onClick={() => categoryHandler(category)}>
                                    <a
                                        href="#"
                                        className={category == mainCategory ? `${styles.listItem} !text-blue-600` : styles.listItem}
                                        aria-current="page"
                                    >
                                        {category}
                                    </a>
                                </li>
                            ))
                        }


                    </ul>
                </div>
            </div>
        </nav>
    )
}

import React, { useContext, useEffect } from 'react'
import { shopItemsContext } from '../context/ShopContext';

export default function Selector() {
    const {filterItems , setFilterItems , shopItems , setShopItems} = useContext(shopItemsContext)
    const changeFormHandler = (event) => {
        switch(event.target.value) {
            case 'First' : {
                console.log('first');
                setFilterItems([...shopItems])
            }
            break;
            case 'Last' : {
                console.log('last');
                setFilterItems([...filterItems].reverse())
            }
            break;

            case 'Lowest': {
                console.log('Highest');
                let newItems = [...shopItems].sort((a,b)=> {
                    return a.price - b.price
                })
                setFilterItems(newItems)
            }
            break;
            case 'Highest': {
                console.log('Highest');
                let newItems = [...shopItems].sort((a,b)=> {
                    return b.price - a.price
                })
                setFilterItems(newItems)

            }
        }

    }



    return (
        <form className="max-w-sm mr-auto">
            <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
            <select onChange={(event) => changeFormHandler(event)} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value='First'  selected>From first to last</option>
                <option value="Last">From last to first</option>
                <option value="Lowest">Lowest price to Highest price</option>
                <option value="Highest">Highest price to Lowest price</option>
            </select>
        </form>
    )
}

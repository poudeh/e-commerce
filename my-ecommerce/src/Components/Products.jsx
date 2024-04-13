import React from 'react'
import { useContext } from 'react'
import Product from './Product'
import { shopItemsContext } from '../context/ShopContext'

export default function Products() {
    const {filterItems , setFilterItems} = useContext(shopItemsContext)
    return (
        <>
            <div className='mt-9 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4  '>
            {
                filterItems.map(item=> (
                    <Product {...item}/>
                ))
            }



            </div>
        </>

    )
}

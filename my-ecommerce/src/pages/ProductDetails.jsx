import React, { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useContext } from 'react';
import { shopItemsContext } from '../context/ShopContext';
import Item from '../Components/Item';


export default function ProductDetails() {
    const { shopItems, setShopItems , filterItems } = useContext(shopItemsContext)
    const [mainProductDetails, setMainProductDetails] = useState('')
    const params = useParams()
    console.log('params are', params.productID);
    console.log('shopItems are', shopItems);
    useMemo(()=> {
        let mainProduct = shopItems.find(shopItem => {
            return shopItem.id == params.productID

        })
        console.log('main product is', mainProduct);
        setMainProductDetails(mainProduct)
    },[shopItems , filterItems])

    return (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-24 mx-auto">
                <Item {...mainProductDetails} />
            </div>
        </section>
    )
}

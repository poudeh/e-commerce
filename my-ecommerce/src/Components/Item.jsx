import React, { memo, useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { shopItemsContext } from '../context/ShopContext';

const Item = memo(({ id, title, price, description, rating, category, image }) => {
  const { addProductToCard } = useContext(shopItemsContext)
  const [isItemAddedToBasket, setIsItemAddedToBasket] = useState(false)

  function addToCardHandler() {
    addProductToCard(id)
    setIsItemAddedToBasket(true)
    setTimeout(() => {
      setIsItemAddedToBasket(false)

    }, 3000);
  }
  return (
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img
        alt="ecommerce"
        className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
        src={image}
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">
          {category}
        </h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
          {title}
        </h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg
              className="w-4 h-4 text-red-500"
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              className="w-4 h-4 text-red-500"
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              className="w-4 h-4 text-red-500"
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              className="w-4 h-4 text-red-500"
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              className="w-4 h-4 text-red-500"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-gray-600 ml-3">
              {rating.count} Votes
            </span>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
            <a className="text-gray-500">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-2 text-gray-500">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-2 text-gray-500">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </a>
          </span>
        </div>
        <p className="leading-relaxed mb-8">
          {description}
        </p>

        <div className="flex gap-4 justify-between">
          <span className="title-font font-medium text-2xl text-gray-900">
            ${price}
          </span>
          <div className='flex flex-col gap-y-2'>
            <button onClick={addToCardHandler} className={`flex items-center justify-center h-16 w-40 ml-auto text-white ${isItemAddedToBasket ? 'bg-blue-500 hover:bg-blue-600' : 'bg-red-500 hover:bg-red-600'} border-0 py-2 px-6 focus:outline-none  rounded`}>
              {isItemAddedToBasket ? 'Item Added to card!' : 'Add To card'}
            </button>
            <Link to={'/'} className="flex items-center justify-center  h-16 w-40 ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded">
              Back to Store
            </Link>
          </div>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
})

export default Item
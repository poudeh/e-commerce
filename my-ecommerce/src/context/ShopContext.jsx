import { createContext, useEffect, useState } from "react";

export const shopItemsContext = createContext()

const ShopitemsProvider = ({ children }) => {
  const [shopItems, setShopItems] = useState([]);
  const [filterItems, setFilterItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [mainCategory, setMainCategory] = useState('All')
  const [isShowToast, setIsShowToast] = useState(false)

  function getProductsFromServer() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setShopItems(data)
        setFilterItems(data)
      })

  }

  useEffect(() => {
    getProductsFromServer()
  }, [])

  const addProductToCard = (productID) => {
    let findMainItem = shopItems.find(shopItem => {
      return shopItem.id == productID
    })
    let addToCardItem = { ...findMainItem, buyCount: 1 }
    let isItemInBasket = cartItems.some(cartItem => {
      return cartItem.id == addToCardItem.id
    })
    if (isItemInBasket) {
      console.log('it is in the basket');
      let newcartItems = cartItems.map(cartItem => {
        if (cartItem.id == addToCardItem.id) {
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

  const saveItemsToLocalStorage = (cartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }


  const elems = {
    shopItems,
    setShopItems,
    mainCategory,
    setMainCategory,
    filterItems,
    setFilterItems,
    cartItems,
    setCartItems,
    isShowToast,
    saveItemsToLocalStorage,
    setIsShowToast,
    addProductToCard
  }

  console.log(elems);


  return (
    <shopItemsContext.Provider value={elems}>
      {children}
    </shopItemsContext.Provider>
  )
}

export default ShopitemsProvider
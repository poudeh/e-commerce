import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import BasketItems from './pages/BasketItems.jsx'
import ShopitemsProvider from './context/ShopContext.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <ShopitemsProvider>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/basket' element={<BasketItems />} />
          <Route path='/details/:productID' element={<ProductDetails/>}/>
        </Routes>
      </ShopitemsProvider>
  </BrowserRouter>


)

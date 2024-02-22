import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from "./store.js"
import {Provider} from "react-redux"
import {createBrowserRouter} from "react-router-dom"
import Home from './components/Home.jsx'
import { BrowserRouter as Router, RouterProvider } from 'react-router-dom'
import Login from './features/user/Login.jsx'
import ProductsPage from './features/products/ProductsPage.jsx'
import ProductDetail from './components/ProductDetail.jsx'
import WishList from './components/WishList.jsx'
import SignUp from './components/SignUp.jsx'
import Cart from './features/cart/Cart.jsx'
const router = createBrowserRouter ([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/:id',
        element: <ProductsPage />
      },
      {
        path: '/:productCategory/:productId',
        element: <ProductDetail />
      },



    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

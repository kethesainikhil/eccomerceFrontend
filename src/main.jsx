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
import SignUp from './features/user/SignUp.jsx'
import Cart from './features/cart/Cart.jsx'
import Protected from './components/Protected.jsx'
const router = createBrowserRouter ([
  {
    path: '/',
    element: <Protected><App /></Protected>,
    children:[
      {
        path: '/home',
        element: <Protected><Home /></Protected>
      },
      {
        path: '/cart',
        element: <Protected> <Cart /></Protected>
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/:id',
        element: <Protected><ProductsPage /></Protected>
      },
      {
        path: '/:productCategory/:productId',
        element: <Protected><ProductDetail /></Protected>
      },

    ]
  },
  {
    path: '/login',
    element: <Login />
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)

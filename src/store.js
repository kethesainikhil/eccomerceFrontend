import { configureStore } from '@reduxjs/toolkit'
import ProductDisplaySlice from './features/products/ProductDisplaySlice'
import CartSlice from './features/cart/CartSlice'
import userSlice from './features/user/userSlice'
export default configureStore({
  reducer: {
    products: ProductDisplaySlice,
    Cart: CartSlice,
    user: userSlice
  },
})
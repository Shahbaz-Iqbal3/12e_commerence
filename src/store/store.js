import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import authSlice from './authSlice'
import wishListSlice from './wishListSlice'
import notify from './notify'
export const store = configureStore({
  reducer: {
    cart: cartSlice,
    auth: authSlice,
    wishList: wishListSlice,
    notify: notify
  },
})
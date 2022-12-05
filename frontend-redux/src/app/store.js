import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import cartReducer from '../features/cart/cartSlice'
import boughtItemsReducer from '../features/boughtItems/boughtItemsSlice'

export const store = configureStore({
    reducer: {
      auth:authReducer,
      cart:cartReducer,
      boughtItems:boughtItemsReducer
    },
  });
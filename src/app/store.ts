import { configureStore } from '@reduxjs/toolkit'
import basketReducer from '../slices/basketSlice'

//gloabl store
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  }
})
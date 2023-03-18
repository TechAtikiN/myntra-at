import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

const initialState: Products = {
  items: []
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    // Actions
    addToBasket: (state: Products, action: PayloadAction<Product>) => { 
      state.items = [...state.items, action.payload]
    },
    removeFromBasket:(state,action)=> { }
  }
})

export const { addToBasket, removeFromBasket } = basketSlice.actions

// Selectors - This is how we pull information from the Global Store slice
export const selectItems = (state: any) => state.basket.items
export default basketSlice.reducer
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

    removeFromBasket: (state: Products, action) => {
      const index = state.items.findIndex(basketItem => basketItem.id === action.payload.id)
      let newBasket = [...state.items]

      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.warn(`Cant remove product (id: ${action.payload.id}) as its not in the basket`)
      }
    state.items = newBasket
    }
  }
})

export const { addToBasket, removeFromBasket } = basketSlice.actions

// Selectors - This is how we pull information from the Global Store slice
export const selectItems = (state: any) => state.basket.items
export const selectTotal = (state: any) => state.basket.items.reduce((total: number,item: Product)=>total += item.price,0)
export default basketSlice.reducer
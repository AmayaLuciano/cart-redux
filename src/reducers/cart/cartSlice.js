import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalCount: localStorage.getItem("totalCount") ? JSON.parse(localStorage.getItem("totalCount")) : 0,
    productsList: localStorage.getItem("productsList") ? JSON.parse(localStorage.getItem("productsList") ) : [],
    totalAmount: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addProducToCart : (state, action) => {
        state.productsList = [...state.productsList,{...action.payload, quantity : 1}]
        state.totalCount += 1

        localStorage.setItem("productsList", JSON.stringify(state.productsList))

        localStorage.setItem("totalCount", JSON.stringify(state.totalCount))

    },
    removeProductFromCart : (state, action) => {
      const productId = action.payload
      let quantity = state.productsList.find(product => product.id === productId)
      state.totalCount -= quantity.quantity
      state.productsList = state.productsList.filter(product => product.id !== productId)

      localStorage.setItem("productsList", JSON.stringify(state.productsList))

      localStorage.setItem("totalCount", JSON.stringify(state.totalCount))
    },
    incrementQuantity: (state, action) => {
      const item = state.productsList.find((item) => item.id === action.payload);
      item.quantity++;
      state.totalCount += 1

      localStorage.setItem("productsList", JSON.stringify(state.productsList))

      localStorage.setItem("totalCount", JSON.stringify(state.totalCount))
    },
    decrementQuantity: (state, action) => {
      const item = state.productsList.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        state.productsList = state.productsList.filter(product => product.id !== item.id)
      } else {
        item.quantity--;
      }
      state.totalCount -= 1

      localStorage.setItem("productsList", JSON.stringify(state.productsList))

      localStorage.setItem("totalCount", JSON.stringify(state.totalCount))
    },
    getTotals(state, action){
     let {total, quantity} = state.productsList.reduce((cartTotal, cartItem) => {
        const {price, quantity} = cartItem
        const itemTotal = price * quantity

        cartTotal.total += itemTotal
        cartTotal.quantity += quantity

        return cartTotal
      }, {
        total:0,
        quantity:0
      })
      state.totalAmount= total
    },
    clearCart(state, action){
      state.productsList = []
      state.totalCount= 0
      localStorage.setItem("productsList", JSON.stringify(state.productsList))
    }
  }
})

// Action creators are generated for each case reducer function
export const { addProducToCart, removeProductFromCart, incrementQuantity, decrementQuantity, getTotals, clearCart } = cartSlice.actions

export default cartSlice.reducer
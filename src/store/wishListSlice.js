import { createSlice } from '@reduxjs/toolkit'

const items = localStorage.getItem('favItems') != null ? 
JSON.parse(localStorage.getItem('favItems')) : []
const initialState = {
  wishList: items,
}

export const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addToWishList: (state,action) => {
      let isExist = state.wishList.find(item => item.$id === action.payload.$id)
      isExist ? null: state.wishList.push(action.payload)
      localStorage.setItem("favItems", JSON.stringify(state.wishList.map(i=>i)));
    },
    removeFromWishList: (state, action) => {
      let cleaned = state.wishList.filter(item => item.$id != action.payload.$id)
      state.wishList = cleaned
      localStorage.setItem("favItems", JSON.stringify(cleaned.map(i=>i)));
    },
    clearWishList: (state) =>{
      state.wishList = []
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
    addToWishList,
    removeFromWishList,
    clearWishList
            } = wishListSlice.actions

export default wishListSlice.reducer
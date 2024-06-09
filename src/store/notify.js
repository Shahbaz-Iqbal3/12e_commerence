import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notify: [],
    
}

const notification = createSlice({
    name: "notify", 
    initialState,
    reducers: { 
         notifi: (state, action) =>{
              state.notify = action.payload;
         },
       
    }
})

export const {notifi} = notification.actions;

export default notification.reducer;
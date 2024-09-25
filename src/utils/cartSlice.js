// const { createSlice } = require("@reduxjs/toolkit");

import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // mutating / modifying the state below
      // ? Redux tookit uses Immer behind the scenes
      state.items.push(action.payload);


      //? In vanila(older) redux ==> DOnt mutate the state  ==> method shown below 
      //? const newState = [...state]
      //? newState.items.push(action.payload)
      //? return newState;  ---> earlier returning was mandatory
    },
    removeItem: (state) => {
      state.items.pop();
    }, 
    clearCart: (state) => {
      // console.log("current",current(state));
      
      // ? RTK says you will have to either mutate the existing state or return a new state
      // state.items.length = 0;   // original State = []

      // or 
      return {items: []}   // this new object will be replaced inside original state = {items: []}

      // the below code will not work & there is a reason 
      //? state = []
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer




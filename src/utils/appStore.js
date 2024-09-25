import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
// import cartReducer from "./cartSlice"

const appStore = configureStore({
    reducer:{
        // cart: cartReducer
        cart: cartSlice
    }
})

export default appStore
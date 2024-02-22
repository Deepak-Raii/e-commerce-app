import { configureStore } from "@reduxjs/toolkit";
import cartSlice from '../store/slices.js';


const store = configureStore({
    reducer:{cart:cartSlice}
})

export default store;
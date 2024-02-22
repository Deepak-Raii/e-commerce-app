import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cartSlice",
    initialState:{
        value:[]
    },
    reducers:{
        addItem(state,action){
            state.value.push(action.payload);
            console.log("Data added in store...");
        },

        removeItem(state,action){
            state.value.splice(1)
        }
    }
});

export default cartSlice.reducer;
export const {addItem,removeItem} = cartSlice.actions;
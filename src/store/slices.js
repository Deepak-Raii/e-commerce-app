import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cartSlice",
    initialState:{
        value:[],
        count:0
    },
    reducers:{
        addItem(state,action){
            state.value.push(action.payload);
            console.log("Data added in store...");
        },

        removeItem(state,action){
            state.value.splice(1)
        },

        increaseItemCount(state,action){
            state.count += action.payload;

        },
        decreaseItemCount(state,action){
            state.count -= action.payload;

        }
    }
});

export default cartSlice.reducer;
export const {addItem,removeItem,increaseItemCount,decreaseItemCount} = cartSlice.actions;
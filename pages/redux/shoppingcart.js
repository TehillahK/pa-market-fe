import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice({
    name: "cart",
    initialState: {
        products:[]
    },
    reducers: {

        addProducts:(state,action)=>{
            state.products= action.payload
        }
    }
});

// Action creators are generated for each case reducer function
export const { addProducts} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice({
    name: "cart",
    initialState: {
        cart:[],
        totalCost:0
    },
    reducers: {

        addCartItem:(state,action)=>{
            state.cart.push(action.payload);
            state.totalCost = state.totalCost + action.payload.cost;
        }
    }
});

// Action creators are generated for each case reducer function
export const { addCartItem} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;

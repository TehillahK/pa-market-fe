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
        },

        removeCartItem:(state,action)=>{
            for (let i = 0; i < state.cart.length ; i++) {
                    if (state.cart[i].id === action.payload){
                        state.totalCost = state.totalCost - state.cart.cost;
                        state.cart.splice(i,1);

                    }

                }

            }



    }
});

// Action creators are generated for each case reducer function
export const { addCartItem, removeCartItem} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;

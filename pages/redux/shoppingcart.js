import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice({
    name: "cart",
    initialState: {
        cart:[],
        totalCost:0,
        farmName:"",
        farmID:""
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
                        if (isNaN(state.totalCost)){
                            state.totalCost =0;
                        }
                    }

                }

            },
        setFarmName:(state,action)=>{
            state.farmName = action.payload;
        },
        setFarmID:(state,action)=>{
            state.farmID = action.payload;
        }



    }
});

// Action creators are generated for each case reducer function
export const { addCartItem, removeCartItem,setFarmName,setFarmID} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import {farmsSlice} from "./farms";

export const cropsSlice = createSlice({
    name:"crops",
    initialState: {
        crops:[]
    },
    reducers: {

        addCrops:(state,action)=>{
            state.crops= action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { addCrops} = cropsSlice.actions;

export default cropsSlice.reducer;

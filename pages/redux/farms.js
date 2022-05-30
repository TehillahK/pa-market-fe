import { createSlice } from "@reduxjs/toolkit";

export const farmsSlice = createSlice({
    name: "user",
    initialState: {
     farms:[]
    },
    reducers: {
   
      addFarms:(state,action)=>{
        state.farms= action.payload
      }
    }
  });
  
  // Action creators are generated for each case reducer function
  export const { addFarms} = farmsSlice.actions;
  
  export default farmsSlice.reducer;
  
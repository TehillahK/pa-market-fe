import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
      user:{

      },
      name:""
    },
    reducers: {

      addUser:(state,action)=>{
          state.user = action.payload
      },
      saveName:(state,action)=>{
          state.name = action.payload
      }

    }
  });

  // Action creators are generated for each case reducer function
  export const { addUser ,saveName} = userSlice.actions;

  export default userSlice.reducer;

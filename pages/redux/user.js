import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
      firstName:"",
      lastName:"",
      email:"",
      phoneNumber:"",
      address:""
    },
    reducers: {
      increment: (state) => {
        state.count += 1;
      },
      decrement: (state) => {
        state.count -= 1;
      },
      incrementByAmount: (state, action) => {
        state.count += action.payload;
      }
    }
  });
  
  // Action creators are generated for each case reducer function
  export const { increment, decrement, incrementByAmount } = userSlice.actions;
  
  export default userSlice.reducer;
  
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
      firstName:"Tehillah",
      lastName:"Kangamba",
      email:"tehillahkangamba@gmail.com",
      phoneNumber:"",
      addresses:[

      ]
    },
    reducers: {

      changeAddress:(state,action)=>{
        state.address = action.payload
      }

    }
  });

  // Action creators are generated for each case reducer function
  export const { changeAddress } = userSlice.actions;

  export default userSlice.reducer;

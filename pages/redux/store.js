import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import farmsReducer from "./farms"
export default configureStore({
    reducer: {
        user: userReducer,
        farms: farmsReducer
    }
  });
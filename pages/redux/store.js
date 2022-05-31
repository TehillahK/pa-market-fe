import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import farmsReducer from "./farms"
import  shoppingCartReducer from "./shoppingcart"
export default configureStore({
    reducer: {
        user: userReducer,
        farms: farmsReducer,
        cart: shoppingCartReducer
    }
  });

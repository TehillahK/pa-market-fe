import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import userReducer from "./user";
import farmsReducer from "./farms"
import  shoppingCartReducer from "./shoppingcart"

const persistConfig = {
    key: 'root',
    storage
};


export default configureStore({
    reducer: {
        user: userReducer,
        farms: farmsReducer,
        cart: shoppingCartReducer
    }
  });

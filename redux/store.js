import {combineReducers, configureStore} from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import userReducer from "./user";
import farmsReducer from "./farms"
import cropsReducer from "./crops"
import  shoppingCartReducer from "./shoppingcart"

const persistConfig = {
    key: 'root',
    storage
};

const rootReducer = combineReducers({
    user: userReducer,
    farms: farmsReducer,
    crops: cropsReducer,
    cart: shoppingCartReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
export default configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
  });

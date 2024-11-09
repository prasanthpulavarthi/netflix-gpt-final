import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice"

const appStore=configureStore({
    reducer:{
        User:UserReducer

    }
})
export default appStore
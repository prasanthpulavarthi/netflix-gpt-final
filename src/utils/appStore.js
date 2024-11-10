import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice"
import moviesReducer from "./moviesSlice"

const appStore=configureStore({
    reducer:{
        User:UserReducer,
        movies:moviesReducer,

    }
})
export default appStore
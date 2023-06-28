import { configureStore } from "@reduxjs/toolkit";
import menu from "./slices/menuslice";


export default configureStore({
    reducer:{
        menu,
    }
})
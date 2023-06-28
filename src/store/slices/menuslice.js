import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isShowMenu: false,

}

const menuSlice = createSlice({
    initialState,
    name: "menu",
    reducers:{
        changeIsMenu:(state) =>{
         state.isShowMenu = !state.isShowMenu
        },
    }
})

export const {changeIsMenu} = menuSlice.actions

export default menuSlice.reducer
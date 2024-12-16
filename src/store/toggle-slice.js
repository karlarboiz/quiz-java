import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name:"toggle-state",
    initialState: {
        toggled: false
    },
    reducers: {
        toggleSwitch(state,action){
           
            state.toggled = action.payload.toggled;
        }
    }
})

export default toggleSlice;
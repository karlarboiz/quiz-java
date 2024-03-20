import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        auth: false,
        username: "",
        message: ""
    },
    reducers: {
        authActive(state,action){
            state.auth = action.payload.auth;
            state.username = action.payload.username;
            state.message = action.payload.message;
        }
    }
  
})

export default authSlice;
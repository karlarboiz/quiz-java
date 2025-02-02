import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        auth: false,
        username: "",
        message: "",
        loading: true
    },
    reducers: {
        authActive(state,action){
            state.auth = action.payload.auth;
            state.username = action.payload.username;
            state.message = action.payload.message;
            state.loading = action.payload.loading
        }
    }
  
})

export default authSlice;
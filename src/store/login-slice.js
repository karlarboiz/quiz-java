import { createSlice } from "@reduxjs/toolkit";
import { postData } from "./login-action";
const loginSlice = createSlice({
    name: 'login',
    initialState: {
        
        token: "",
        message: "",
        valid: false
    },
    reducers: {
        loginCheck(state,action){
            
            state.token = action.payload.token;
            state.message = action.payload.message;
            state.valid = action.payload.isValid;
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(postData.fulfilled, (state, action) => {
          // Add user to the state array
          state.token = action.payload.token;
            state.message = action.payload.message;
            state.valid = action.payload.isValid;
        })
      }
  
})

export default loginSlice;
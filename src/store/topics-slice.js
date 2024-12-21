import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics:[]
    },
    reducers: {
        addTopics(state,action){
            state.topics = action.payload.topics;
        }
    }
  
})

export default topicsSlice;
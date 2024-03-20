import { createSlice } from "@reduxjs/toolkit";

const quizItemsSlice = createSlice({
    name: 'quiz-items',
    initialState: {
        collected: false,
        items: []
    },
    reducers: {
        collectQuizItems(state,action){
           
            state.collected = action.payload.collected;
            state.items = action.payload.items;
        }
    }
  
})

export default quizItemsSlice;
import { createSlice } from "@reduxjs/toolkit";

const quizItemSlice = createSlice({
    name: 'quiz-item',
    initialState: {
        ready: false,
        quizDetails: {}
    },
    reducers: {
        collectQuizItem(state,action){   

            state.ready = action.payload.ready
            state.quizDetails = action.payload.quizDetails;
        }
    }
  
})

export default quizItemSlice;
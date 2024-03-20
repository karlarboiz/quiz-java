import { createSlice } from "@reduxjs/toolkit";

const quizAnswerSlice = createSlice({
    name: 'quiz-answer',
    initialState: {
        userAnswer: "",
        quizAnswer:""
    },
    reducers: {
        collectAnswer(state,action){   
            state.userAnswer = action.payload.userAnswer
            state.quizAnswer = action.payload.quizAnswer
        }
    }
  
})

export default quizAnswerSlice;
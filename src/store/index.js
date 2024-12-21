import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth-slice';
import quizItemsSlice from './quiz-items__slice';
import quizItemSlice from './quiz-item__slice';
import quizAnswerSlice from './quiz-answer__slice';
import loginSlice from './login-slice';
import toggleSlice from './toggle-slice';
import topicsSlice from './topics-slice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    quizItems: quizItemsSlice.reducer,
    quizItem: quizItemSlice.reducer,
    quizAnswer: quizAnswerSlice.reducer,
    login: loginSlice.reducer,
    toggle: toggleSlice.reducer,
    topics: topicsSlice.reducer
  }
})

export const authAction = authSlice.actions;
export const quizItemsAction = quizItemsSlice.actions;
export const quizItemAction = quizItemSlice.actions;
export const quizAnswerAction = quizAnswerSlice.actions;
export const loginAction = loginSlice.actions;
export const toggleAction = toggleSlice.actions;
export const topisAction = topicsSlice.actions;
export default store;
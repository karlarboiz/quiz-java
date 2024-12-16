import { quizAnswerAction } from ".";

export const fetchQuizAnswer = (userAnswer,quizAnswer)=>{
    return async(dispatch)=>{
        dispatch(quizAnswerAction.collectAnswer({
            userAnswer: userAnswer,
            quizAnswer:quizAnswer
        })); 
        
    }
}
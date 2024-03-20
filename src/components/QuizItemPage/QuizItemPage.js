import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchQuizItem } from "../../store/quiz-item__action";
import { fetchQuizAnswer } from "../../store/quiz-answer__action";
import AnswerItem from "../AnswerItem/AnswerItem";
const QuizItemPage = ({quizIdTag}) =>{
    const dispatch = useDispatch();
    const quizItem = useSelector(state => state.quizItem);

    const {ready,quizDetails } = quizItem;

    let choices = !ready ? [] : [...quizDetails?.incorrectAnswers,quizDetails?.correctAnswer].sort();
    let correctAns = quizDetails?.correctAnswer
    
    useEffect(()=>{
        if(quizIdTag !== null ) {
            dispatch(fetchQuizItem(quizIdTag));
        }
    },[dispatch,quizIdTag])

    useEffect(()=>{
        dispatch(fetchQuizAnswer("",correctAns));
    },[dispatch,correctAns])
 
    function getAnswer(e){
        dispatch(fetchQuizAnswer(e.target.textContent,correctAns));
        
    }

    return (
        <React.Fragment>
            <section>
                <p>{quizItem?.quizDetails?.question?.text}</p>

                {choices.map(val =>{
                    return(<AnswerItem text={val} key={val} getAnswer={getAnswer}/>)
                })}
            </section>

        </React.Fragment>
    )
}

export default QuizItemPage;
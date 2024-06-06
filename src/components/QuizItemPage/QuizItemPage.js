import React, { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchQuizItem } from "../../store/quiz-item__action";
import { fetchQuizAnswer } from "../../store/quiz-answer__action";
import AnswerItem from "../AnswerItem/AnswerItem";
import quiz from "./QuizItemPage.module.css";

const QuizItemPage = ({quizIdTag,itemsLeft}) =>{
    const [index,setIndex] = useState(null);
    
    const dispatch = useDispatch();
    const quizItem = useSelector(state => state.quizItem);

    const {ready,quizDetails } = quizItem;

    let choices = !ready ? [] : [...quizDetails?.incorrectAnswers,quizDetails?.correctAnswer].sort();
    let correctAns = quizDetails?.correctAnswer
    let category = quizItem?.quizDetails?.category.split("_").map(val=>val.charAt(0).toUpperCase() + val.slice(1)).join(" ");
    let difficulty = quizItem?.quizDetails?.difficulty.charAt(0).toUpperCase() + quizItem?.quizDetails?.difficulty.slice(1);
    
    useEffect(()=>{
        if(quizIdTag !== null ) {
            dispatch(fetchQuizItem(quizIdTag));
        }
    },[dispatch,quizIdTag])

    useEffect(()=>{
        dispatch(fetchQuizAnswer("",correctAns));
    },[dispatch,correctAns])
 
    function getAnswer(e){

        setIndex(Number(e.target.tabIndex));
        dispatch(fetchQuizAnswer(e.target.textContent.trim(),correctAns));
    }

    useEffect(()=>{ 
        setIndex(null);
    },[itemsLeft])


    return (
        <aside className={quiz['quiz-body']}>
            <div>Items Left: {itemsLeft}</div>
            <div>Category: {category}</div>
            <div>Difficulty: {difficulty}</div>
            <p className={quiz['quiz-question']}>{quizItem?.quizDetails?.question?.text}</p>

            <div className={quiz['quiz-body__selection']}>
                {choices.map((val,i) =>{
                    return(<AnswerItem text={val} key={val} getAnswer={getAnswer} dataValue={i} index={index}/>)
                })}
            </div>
        </aside>

    )
}

export default QuizItemPage;
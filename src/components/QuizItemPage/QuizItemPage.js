import React, { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchQuizItem } from "../../store/quiz-item__action";
import { fetchQuizAnswer } from "../../store/quiz-answer__action";
import AnswerItem from "../AnswerItem/AnswerItem";
import quiz from "./QuizItemPage.module.css";
import { motion } from "framer-motion";



const QuizItemPage = ({quizIdTag,itemsLeft}) =>{
    const [index,setIndex] = useState(null);
    
    const dispatch = useDispatch();
    const quizItem = useSelector(state => state.quizItem);

    const {ready,quizDetails } = quizItem;

    let choices = !ready ? [] : [...quizDetails?.incorrectAnswers,quizDetails?.correctAnswer].sort();
    let correctAns = quizDetails?.correctAnswer
   
    let difficulty = quizItem?.quizDetails?.difficulty ? quizItem?.quizDetails?.difficulty?.charAt(0).toUpperCase() + quizItem?.quizDetails?.difficulty?.slice(1) : "";

    let category = quizItem?.quizDetails?.category ? (quizItem?.quizDetails?.category?.includes("_") ? quizItem?.quizDetails?.category?.split("_").map(val=>val?.charAt(0).toUpperCase() + val.slice(1)).join(" ") : 
    quizItem?.quizDetails?.category.charAt(0).toUpperCase() + quizItem?.quizDetails?.category.slice(1)) : "";
   
    useEffect(()=>{
        if(quizIdTag !== null ) {
            dispatch(fetchQuizItem(quizIdTag));
        }
    },[dispatch,quizIdTag])

    useEffect(()=>{
        dispatch(fetchQuizAnswer("",correctAns));
    },[dispatch,correctAns])
 
    function getAnswer(e){
        console.log(e.target.tabIndex);
        setIndex(Number(e.target.tabIndex));
        dispatch(fetchQuizAnswer(e.target.textContent.trim(),correctAns));
    }

    useEffect(()=>{ 
        setIndex(null);
    },[itemsLeft])

    // this is for animation
const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.7,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

//


    return (
        <aside className={quiz['quiz-body']}>
            <div>Items Left: {itemsLeft}</div>
            <div>Category: {category}</div>
            <div>Difficulty: {difficulty}</div>
            <p className={quiz['quiz-question']}>{quizItem?.quizDetails?.question?.text}</p>

            <motion.ul className={quiz['quiz-body__selection']}  
            variants={container}
            initial="hidden"
            animate="visible">  
                {choices.map((val,i) =>{
                    return(
                        <motion.li  className={quiz['quiz-question__answer']} variants={item} onClick={getAnswer} tabIndex={i} key={val} >
                            <AnswerItem text={val} dataValue={i} index={index} />
                        </motion.li>
                    )
                })}
            </motion.ul>
        </aside>

    )
}

export default QuizItemPage;
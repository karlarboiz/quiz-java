import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import QuizTakenCard from "../../components/QuizTakenCard/QuizTakenCard";
import quiz from "./Main.module.css";
const Main = ({data1})=>{
    const auth = useSelector(state => state.auth);  

    return(
        <main className={quiz['main-container']}>
            
            <div className={quiz['main-container__title']}>Hello, {auth.username}</div>
            
            <QuizTakenCard data={data1} title="Ïncomplete Quizzes"/>    
            
            <Link to="/quiz-main" replace="true">Start Quiz</Link>

        </main>
    )

}

export default Main;
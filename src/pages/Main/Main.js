import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import QuizTakenCard from "../../components/QuizTakenCard/QuizTakenCard";
import quiz from "./Main.module.css";
const Main = ({data1})=>{
    const auth = useSelector(state => state.auth);  
    return(
        <main className={quiz['main-container']}>   
            
            <section className={quiz['sub-container']}>
                <div className={quiz['main-container__title']}>Hello, {auth.username}!</div>
                <Link to="/quiz-main" replace="true" className={quiz['start-quiz__link']}>Start Quiz</Link>
            </section>
            
            <QuizTakenCard data={data1} title="Ïncomplete Quizzes"/>    
        </main>
    )

}

export default Main;
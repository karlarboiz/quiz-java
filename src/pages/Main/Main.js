import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import QuizTakenCard from "../../components/QuizTakenCard/QuizTakenCard";
import BodyComponent from "../../components/BodyComponent/BodyComponent";

import quiz from "./Main.module.css";

const Main = ({data1})=>{
    const auth = useSelector(state => state.auth);  
    return(
        <BodyComponent>   
            
            <section className={quiz['sub-container']}>
                <div className={quiz['main-container__title']}>Welcome User, {auth.username}!</div>
                <Link to="/quiz-main" replace="true" className={quiz['start-quiz__link']}>Start Quiz</Link>
            </section>
            
            <QuizTakenCard data={data1} title="Ïncomplete Quizzes"/>    
        </BodyComponent>
    )

}

export default Main;
import React from "react";
import quiz from "./QuizTakenCard.module.css";
const QuizTakenCard = ({data,title}) =>{
    return(
        <section className={quiz['quiz-card']}>
             <div>{title}</div>
            <ul>    
                
                {data.map((val,i)=>(
                    <li key={i}>
                        <div>Date Started: {val.date}</div>
                        <div>Total Items: {val.incompleteQuizzes}</div>

                        <a href={`/resume-quiz/${val.idPk}`}>Resume Quiz</a>
                    </li>
                ))}
            </ul>
        </section>
       
    )   
}

export default QuizTakenCard;
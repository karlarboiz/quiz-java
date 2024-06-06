import React from "react";
import style from "./Score.module.css";
import { Link } from "react-router-dom";
import BodyComponent from "../../components/BodyComponent/BodyComponent";

const Score = ({data})=>{
    let filterCorrectItems = data?.filter(val =>val.correct);

    return(
    <BodyComponent>
        <div>
        <p>Your Score: {filterCorrectItems?.length} / {data?.length}</p> <Link to="/quiz-main" replace="true">Try Again</Link>
        </div>
       
        
       {data?.map(val=>(
            <article className={val.correct ? style['container-success'] : style['container-error']} key={val.quizIdTag}>
                <h2>{val.incrementId}</h2>
                <p>Correct Answer: {val.correctAnswer}</p>
                <p>Your Answer: {val.userAnswer}</p>
                <p> {val.correct}</p>
            </article>
       ))}


       
    </BodyComponent>)
}


export default Score;
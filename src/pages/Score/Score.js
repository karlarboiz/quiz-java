import React from "react";
import style from "./Score.module.css";
import { Link } from "react-router-dom";

const Score = ({data})=>{
    let filterCorrectItems = data?.filter(val =>val.correct);
    console.log('karl')
    return(
    <React.Fragment>
        <h1>Your Score: {filterCorrectItems?.length} / {data?.length}</h1>
        
       {data?.map(val=>(
        <article className={val.correct ? style['container-success'] : style['container-error']} key={val.quizIdTag}>
                <h2>{val.incrementId}</h2>
                <p>Correct Answer: {val.correctAnswer}</p>
                <p>Your Answer: {val.userAnswer}</p>
                <p> {val.correct}</p>
            </article>
       ))}


       <Link to="/main" replace="true">Try Again</Link>
    </React.Fragment>)
}


export default Score;
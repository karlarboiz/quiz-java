import React from "react";

const QuizTakenCard = ({data,title}) =>{
    return(
        <ul>    
            <div>{title}</div>
            {data.map((val,i)=>(
                <li key={i}>
                    <div>Date Started: {val.date}</div>
                    <div>Total Items: {val.incompleteQuizzes}</div>

                    <a href={`/game-resume/${val.idPk}`}>Resume Quiz</a>
                </li>
            ))}
        </ul>
    )   
}

export default QuizTakenCard;
import React from "react";
import { IoExpand } from "react-icons/io5";
const Records = ({data})=>{
  
    return (
        <React.Fragment>
            <h1>Your History</h1>
            <ul>
               {data?.map(val=>(
                <li key={val.idPk}>
                    <p>Quiz Id: {val.quizUUID} </p>
                    <p> Total Quiz Items: {val.totalQuizItems}</p>
                    <p> Correct Answers: {val.totalCorrect}</p>
                    <p> Incorrect Answers: {val.totalIncorrect}</p>
                </li>
               ))}
            </ul>  
        </React.Fragment>
    )
}

export default Records;
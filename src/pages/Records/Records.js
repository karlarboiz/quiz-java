import React from "react";
import BodyComponent from "../../components/BodyComponent/BodyComponent";
const Records = ({data})=>{
  
    return (
        <BodyComponent>
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
        </BodyComponent>
    )
}

export default Records;
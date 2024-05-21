import React from "react";

const QuizTakenCard = ({data,title}) =>{
    return(
        <React.Fragment>
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
        </React.Fragment>
       
    )   
}

export default QuizTakenCard;
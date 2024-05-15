import React from "react";
import { useSelector } from "react-redux";
import QuizTakenCard from "../../components/QuizTakenCard/QuizTakenCard";
const Main = ({data1})=>{
    const auth = useSelector(state => state.auth);  

    return(
        <React.Fragment>
            <div>Hello, {auth.username}</div>
            
            <QuizTakenCard data={data1} title="Ïncomplete Quizzes"/>    
        </React.Fragment>
    )

}

export default Main;
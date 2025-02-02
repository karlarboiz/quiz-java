import React from "react";
import StartQuiz from "./StartQuiz";
import { useSelector } from "react-redux";
// import { fetchQuizItems } from "../../store/quiz-items__action";
import { Navigate, json,redirect} from "react-router";

const StartQuizPage = ()=>{
    
    const auth = useSelector(state=>state.auth);

    return (
        
        <React.Fragment>
  
            {auth.loading !== undefined && !auth.loading && auth?.auth && <StartQuiz />}
            {auth.loading !== undefined && !auth.loading && !auth?.auth  && <Navigate to="/login" replace="true"/>}           
        </React.Fragment>
    )
}


export default StartQuizPage;

export async function updateQuizItemHandler({request,params}){
    const requestData = await request.formData();

    const id = requestData.get("id");
    const quizIdTag = requestData.get("quiz-tag");
    const userAnswer = requestData.get("user-answer");
    
    let data;
    let dataResult;


    const urlDecided = id ? `${process.env.REACT_APP_API_URL}main/user/game-resume/${Number(id)}` :  `${process.env.REACT_APP_API_URL}main/user/game`;

    try {
        data = await fetch(urlDecided,{
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                "Authorization" : `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({ 
                quizIdTag: quizIdTag,
                userAnswer:userAnswer
            })
        })

        if(!data.ok) {
            throw json({message: "Something went wrong"},
            {status: 500})
        }

        dataResult = await data.json();
    }catch(e){
        console.log(e);
    }

    redirect("/start-page")

    return dataResult;

}

export async function fetchResultQuizData(){

    let data;
    let dataResult;

    try{
        data = await fetch("http://localhost:8080/main/user/fetch/game-items",{
            headers:{
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })

        if(!data.ok) {
            throw json({message: "Something went wrong"},
            {status: 500})
        }

        dataResult = await data.json();
    }catch(e){
        console.log(e)
    }

    return dataResult;

}



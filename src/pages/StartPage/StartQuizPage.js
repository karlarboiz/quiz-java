import React, { useEffect} from "react";
import StartQuiz from "./StartQuiz";
import { useDispatch,useSelector } from "react-redux";
import { fetchQuizItems } from "../../store/quiz-items__action";
import { Navigate, json,redirect,useActionData } from "react-router";

const StartQuizPage = ()=>{

    const data = useActionData();
    const dispatch = useDispatch();
    const quizItems = useSelector(state=> state.quizItems);
    const token = localStorage.getItem("token");
    const auth = useSelector(state=>state.auth);

    useEffect(()=>{ 

        dispatch(fetchQuizItems(token));
    
    },[dispatch,token,data])
 

    return (
        <React.Fragment>
            {auth?.auth && <StartQuiz items={quizItems}/>}
            {!auth?.auth && <Navigate to="/login" replace="true"/>}           
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



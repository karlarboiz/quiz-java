import React from "react";
import StartQuiz from "../StartPage/StartQuiz";
import { useRouteLoaderData,json } from "react-router";

const ResumeQuizPage = () =>{
    const data = useRouteLoaderData("resume");
    const bundledData = {
        collected: true,
        items:data
    }
    return (
    
        <StartQuiz items={bundledData}/>
    )
}

export default ResumeQuizPage;

export async function getResumeItems({request,params}){
    let data;
    let dataResult;


    try {
        data = await fetch(`http://localhost:8080/main/user/resume-quiz/${params.id}`,{
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
        });

        if(!data.ok || 
            data.status === 500) {
            throw new json({message: "Something went wrong"},
            {status: 404})
        }

        dataResult = await data.json();


    }catch(e){
        throw json({message: e.message},
        {status: 404})
    }

    return dataResult;
}
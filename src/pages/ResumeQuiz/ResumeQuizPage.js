import React from "react";
import StartQuiz from "../StartPage/StartQuiz";
import { useRouteLoaderData,json } from "react-router";

const ResumeQuizPage = () =>{
    const data = useRouteLoaderData("resume");

    console.log(data);
    const bundledData = {
        collected: true,
        items:data.dataResult
    }
    return (
    
        <StartQuiz items={bundledData} id={data.id}/>
    )
}

export default ResumeQuizPage;

export async function getResumeItems({request,params}){
    let data;
    let dataResult;
    const id = Number(params.id);
    const objReturn = {};

    try {
        data = await fetch(`http://localhost:8080/main/user/resume-quiz/${id}`,{
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

    objReturn.dataResult = dataResult;
    objReturn.id = id;

    return objReturn;
}
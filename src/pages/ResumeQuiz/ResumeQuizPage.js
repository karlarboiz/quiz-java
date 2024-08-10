import React from "react";
import StartQuiz from "../StartPage/StartQuiz";
import { useLoaderData,json,useActionData } from "react-router";

const ResumeQuizPage = () =>{
    const returnedData = useActionData();
    const data = useLoaderData();
    
    const bundledData = {
        collected: data.isCollected,
        items:data.dataResult
    }
    return (
    
        <StartQuiz items={bundledData} id={data.id} returnedData={returnedData}/>
    )
}

export default ResumeQuizPage;

export async function getResumeItems({request,params}){
    let data;
    let dataResult;

    const id = Number(params.id);
    const objReturn = {};
    objReturn.isCollected = false;
    try {
        
        data = await fetch(`${process.env.REACT_APP_API_URL}main/user/resume-quiz/${id}`,{
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
        objReturn.isCollected = true;

    }catch(e){
        throw json({message: e.message},
        {status: 404})
    }

    objReturn.dataResult = dataResult;
    objReturn.id = id;

    return objReturn;
}
import React from "react";
import Main from "./Main";
import { useSelector } from "react-redux";
import { Navigate,json,useLoaderData } from "react-router";

const MainPage = ()=>{
    const data = useLoaderData();

    const auth = useSelector(state=>state.auth);
    return(
        <React.Fragment>
        {auth?.auth && <Main data1={data}/>}
        {!auth?.auth && <Navigate to="/login" replace="true"/>}
        </React.Fragment>
    )
}

export default MainPage;

export async function fetchIncompleteQuizzes(){
    let data;
    let dataResult;

    try {
        data = await fetch("http://localhost:8080/main/user/game-history/incomplete-quizzes",{
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
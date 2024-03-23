import React from "react";
import Records from "./Records";
import { useLoaderData,json } from "react-router";
const RecordsPage = ()=>{
    const data = useLoaderData();
    return(
        <Records data={data}/>
    )
} 
   
export default RecordsPage;


export async function getQuizHistoryHandler(){

    let data;
    let dataResult;

    try{
        data = await fetch("http://localhost:8080/main/user/game-history",{
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

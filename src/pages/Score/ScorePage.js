import React from "react";
import Score from "./Score";
import { useLoaderData,json, Navigate } from "react-router";
import { useSelector } from "react-redux";

const ScorePage = ()=>{

    const data = useLoaderData();
    const auth = useSelector(state=>state.auth);

    return(
        <React.Fragment>
            {auth?.auth && <Score data={data}/>}
            {!auth?.auth && <Navigate to="/login" replace="true"/>}    
            
        </React.Fragment>
    )
}


export default ScorePage;

export async function fetchCurrentGameResults(){
        let data;
        let dataResult;
    
        try{
            data = await fetch("http://localhost:8080/main/user/fetch/game-result",{
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
        
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
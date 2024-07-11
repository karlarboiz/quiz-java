import React from "react";
import Score from "./Score";
import { useLoaderData,json, Navigate } from "react-router";
import { useSelector } from "react-redux";

const ScorePage = ()=>{

    const data = useLoaderData();
    const auth = useSelector(state=>state.auth);

    console.log(data)
    return(
        <React.Fragment>
            {auth?.auth && <Score data={data}/>}
            {!auth?.auth && <Navigate to="/login" replace="true"/>}    
            
        </React.Fragment>
    )
}


export default ScorePage;

export async function fetchCurrentGameResults({request,params}){
        let data;
        let dataResult;
        console.log(request)
        console.log(params)
        const id = params?.id;

        const urlDecided = id ? `${process.env.REACT_APP_API_URL}/main/user/fetch/game-result/${Number(id)}`: `${process.env.REACT_APP_API_URL}/main/user/fetch/game-result`;
        try{
            data = await fetch(urlDecided,{
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
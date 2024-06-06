import React from "react";
import Users from "./Users";
import { json,useLoaderData} from "react-router";

const UsersPage = ()=>{
    const data = useLoaderData();

    return (
        <React.Fragment>
            <Users data={data}/>
        </React.Fragment>
    )
}

export async function getUsersGameRecords(){
    let data;
    let dataResult;
    try{
        data = await fetch("http://localhost:8080/quiz/api/info/users/record")
    
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

export default UsersPage;

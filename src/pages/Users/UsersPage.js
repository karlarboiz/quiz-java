import React from "react";
import Users from "./Users";
import { json, useLoaderData } from "react-router";

const UsersPage = () => {
    const data = useLoaderData();
    
    return (
        <React.Fragment>
            <Users data={data} />
        </React.Fragment>
    )
}

fetch(`${process.env.REACT_APP_API_URL}/quiz/api/info/users/record`)
export async function getUsersGameRecords() {

    let data;
    let dataResult;

    console.log()
    try {
        data = await fetch(`${process.env.REACT_APP_API_URL}/quiz/api/info/users/record`)
        
        if (!data.ok ||
            data.status === 500) {
            throw new json({ message: "Something went wrong" },
                { status: 404 })
        }

        dataResult = await data.json();
        
    } catch (e) {
        throw json({ message: e.message },
            { status: 404 })
    }


    return dataResult;


}

export default UsersPage;

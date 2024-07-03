import React from "react";
import Records from "./Records";
import { useLoaderData, json, Navigate } from "react-router";
import { useSelector } from "react-redux";

const RecordsPage = () => {
    const data = useLoaderData();
    const auth = useSelector(state => state.auth);
    return (
        <React.Fragment>
            {!auth?.auth && <Navigate to="/main" />}
            {auth?.auth && <Records data={data} />}

        </React.Fragment>
    )
}
export default RecordsPage;


export async function getQuizHistoryHandler() {

    let data;
    let dataResult;

    try {
        data = await fetch("http://localhost:8080/main/user/game-history", {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        if (!data.ok) {
            throw json({ message: "Something went wrong" },
                { status: 500 })
        }

        dataResult = await data.json();
    } catch (e) {
        console.log(e)
    }



    return dataResult;

}

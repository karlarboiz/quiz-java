import React from "react";
import Profile from "./Profile";
import { json, useLoaderData} from "react-router";

const ProfilePage = () => {
    const data = useLoaderData();
    return (
        <React.Fragment>
            <Profile data={data}/>
        </React.Fragment>
    )
}

export default ProfilePage;

export async function getProfileDetails() {
    let data;
    let dataResult;
    try {
        data = await fetch(`${process.env.REACT_APP_API_URL}main/user/profile-details`,{
            headers:{'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem("token")}`}

        })

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

import React from "react";
import UserCard from "../../components/UserCard/UserCard";
import BodyComponent from "../../components/BodyComponent/BodyComponent";
    const Users = ({data})=>{

    const mappedData = data.map(val=>(
        <UserCard username={val.username} completedQuizzes={val.completedQuizzes} key={val.id}/>
    ))
    return (
        <BodyComponent>
            {mappedData}
        </BodyComponent>
    )
}

export default Users;
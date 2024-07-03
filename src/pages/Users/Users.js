import React from "react";
import UserCard from "../../components/UserCard/UserCard";
import BodyComponent from "../../components/BodyComponent/BodyComponent";
const Users = ({ data }) => {
    console.log(data);
    const mappedData = data.map(val => (
        <UserCard username={val.username} completedQuizzes={val.completedQuizzes} key={val.id} regDate={val.registrationDate} />
    ))
    return (
        <BodyComponent>
            {mappedData}
        </BodyComponent>
    )
}

export default Users;
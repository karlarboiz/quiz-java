import React from "react";
import UserCard from "../../components/UserCard/UserCard";
import BodyComponent from "../../components/BodyComponent/BodyComponent";
import quiz from "./Users.module.css";
const Users = ({ data }) => {
    
    const mappedData = data.map(val => (
        <UserCard username={val.username} completedQuizzes={val.completedQuizzes} key={val.id} regDate={val.registrationDate} />
    ))
    return (
        <BodyComponent>
            <section className={quiz['user-section']}>
                {mappedData}
            </section>
        </BodyComponent>
    )
}

export default Users;
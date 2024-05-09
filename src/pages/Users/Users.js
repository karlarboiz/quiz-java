import React from "react";
import UserCard from "../../components/UserCard/UserCard";
const Users = ({data})=>{
    console.log(data);
    const mappedData = data.map(val=>(
        <UserCard username={val.username} completedQuizzes={val.completedQuizzes} key={val.id}/>
    ))
    return (
        <React.Fragment>
            {mappedData}
        </React.Fragment>
    )
}

export default Users;
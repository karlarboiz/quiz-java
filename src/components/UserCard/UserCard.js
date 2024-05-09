import React from "react";

const UserCard = ({username,completedQuizzes})=>{

    return(
        <div>
            <h5>{username}</h5>
            <p>Quizzes Completed: {completedQuizzes}</p>
        </div>
    )

}

export default UserCard;
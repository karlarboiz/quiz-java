import React from "react";
import quiz from "./UserCard.module.css";
const UserCard = ({ username, completedQuizzes, regDate }) => {

    return (
        <div className={quiz['user-card']}>
            <div>{username}</div>
            <p>Quizzes Completed: {completedQuizzes}</p>
            <span>Start Date: {regDate}</span>
        </div>
    )

}

export default UserCard;
import React from "react";
import quiz from "./UserCard.module.css";
import { returnEqualMonth } from "../../util/month-util";
import { motion } from "framer-motion";

const UserCard = ({ username, completedQuizzes, regDate }) => {
    let improveDate = new Date(regDate);
    let convertedDate = returnEqualMonth(improveDate.getMonth()) + ' ' + improveDate.getDate() + ', ' + improveDate.getFullYear();

    return (
        <motion.div
        whileHover={{
            scale: 1.05,
            
          }}

          transition={{
            duration: .5,
            type: 'spring',
            stiffness: 300
          }}
        className={quiz['user-card']}>
            <div className={quiz['user-card--header']}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg>
                <div className={quiz['username']}>{username}</div>
            </div>
            <hr></hr>
            <p className={quiz['completed-quizzes']}>Quizzes Completed: {completedQuizzes}</p>
            <span className={quiz['register-date']}>Date Registered: {convertedDate}</span>
        </motion.div>
    )

}

export default UserCard;
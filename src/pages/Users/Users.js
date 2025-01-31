import React from "react";
import UserCard from "../../components/UserCard/UserCard";
import BodyComponent from "../../components/BodyComponent/BodyComponent";
import quiz from "./Users.module.css";
import { motion } from "framer-motion";
const Users = ({ data }) => {
    
    const mappedData = data?.map(val => (
        <UserCard username={val.username} completedQuizzes={val.completedQuizzes} key={val.id} regDate={val.registrationDate} />
    ))
    return (
        <BodyComponent>
            <motion.section
                 initial={{
                    opacity:0,
                    y: +25
                }}
                animate={{
                    opacity:1,
                    y: 0,
               
                }}
                
                transition={{
                    duration:.5,
                    type: 'tween'
                }}
            className={quiz['user-section']}>
                {mappedData}
            </motion.section>
        </BodyComponent>
    )
}

export default Users;
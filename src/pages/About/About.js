import React from "react";
import BodyComponent from "../../components/BodyComponent/BodyComponent";
import quiz from "./About.module.css";
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.div
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
        >

        <BodyComponent>
            <div className={quiz['about-header']}>
                Trivia Game
            </div>
            <div className={quiz['content']}>
                This is a mini-project to master Java Spring Boot as back-end and React js as Front End. I figured it would be </div>

        </BodyComponent>

        </motion.div>
       
    )
}

export default About;
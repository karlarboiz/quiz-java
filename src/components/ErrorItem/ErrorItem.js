import { motion } from "framer-motion";
import React from "react";
import quiz from "./ErrorItem.module.css";
const ErrorItem =({message})=>{
    return (
        <motion.li
        initial={{
            opacity:0,
            y: .5,
        }}

        animate={{
            opacity:1,
            y: 0,
        
        }}

        transition={{
            duration:.5,
            type: 'tween'
        }}

        
        className={quiz.error}>{message}</motion.li>
    )
}

export default ErrorItem;
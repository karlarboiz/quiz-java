import React from "react";
import { useSelector } from "react-redux";
import { Link} from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import home from "./Home.module.css";
import { motion } from "framer-motion";

export default function Home(){
    const auth = useSelector(state => state.auth);
    return (
        <React.Fragment>
            <motion.section className={home['home-page']}
            initial={{
                y: -5,
                opacity: 0
            }}
            animate={
                {
                    y:0,
                    opacity:1
                }
            }

            transition={{
                duration: .5,
                type: 'spring'
            }}
            >
                <h1 className={home['home-page__title']}>Welcome to Trivia APP</h1>
                <motion.div
                initial={{
                    y: .25,
                    x: .25,
                    scale: .85
                }}
                animate={{
                    y: 0,
                    x: 0,
                    scale: 1.025
                }}

                transition={{
                    duration: .25,
                    type: 'bounce'
                }}
                >

<LazyLoadImage src={require("../../pictures/trivia.png")} alt="This is Trivia Logo" className={home['home-image']}/>
                </motion.div>
               
                <motion.p 
                >Ready for knowledge-check-game?</motion.p>
                {auth?.auth && <Link to="/quiz-main" replace="true">Start Quiz</Link>}
                {!auth?.auth && <Link to="/login" replace="true">Login</Link>}
            </motion.section>
        </React.Fragment>
           
     
    )
}

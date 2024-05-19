import React from "react";
import { useSelector } from "react-redux";
import { Link} from "react-router-dom";
import home from "./Home.module.css";
export default function Home(){
    const auth = useSelector(state => state.auth);
    return (
        <React.Fragment>
                <section className={home['home-page']}>
                    <h1 className={home['home-page__title']}>Welcome to Trivia APP</h1>
                    <p>Ready for knowledge-check-game?</p>
                    {auth?.auth && <Link to="/quiz-main" replace="true">Start Quiz</Link>}
                </section>
        </React.Fragment>
           
     
    )
}

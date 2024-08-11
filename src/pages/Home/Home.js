import React from "react";
import { useSelector } from "react-redux";
import { Link} from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import home from "./Home.module.css";
export default function Home(){
    const auth = useSelector(state => state.auth);
    return (
        <React.Fragment>
            <section className={home['home-page']}>
                <h1 className={home['home-page__title']}>Welcome to Trivia APP</h1>
                <LazyLoadImage src={require("../../pictures/trivia.png")} alt="This is Trivia Logo" className={home['home-image']}/>
                <p>Ready for knowledge-check-game?</p>
                {auth?.auth && <Link to="/quiz-main" replace="true">Start Quiz</Link>}
                {!auth?.auth && <Link to="/login" replace="true">Login</Link>}
            </section>
        </React.Fragment>
           
     
    )
}

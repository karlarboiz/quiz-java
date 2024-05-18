import React from "react";
import { useSelector } from "react-redux";
import { Link} from "react-router-dom";

export default function Home(){
    const auth = useSelector(state => state.auth);

    console.log(auth)
    return (
        <React.Fragment>
           
                <h1>Welcome to Trivia API</h1>
                <p>Ready for knowledge-check-game?  </p>
                {auth?.auth && <Link to="/quiz-main" replace="true">Start Quiz</Link>}
        </React.Fragment>
           
     
    )
}

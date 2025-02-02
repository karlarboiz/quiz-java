import React from "react";
import { Link} from "react-router-dom";
import qp from "./QuizPreference.module.css";
import BodyComponent from "../../components/BodyComponent/BodyComponent";

const QuizPreference = ()=>{
    return (
        <BodyComponent>
            <ul className={qp["preference-list__container"]}>
             <li className={qp["preference-list"]}>
                <Link to="trivia" relative="true" 
                className={qp["preference"]}>Trivia
                </Link>
            </li>
             <li className={qp["preference-list"]}>
                <Link to="custom" relative="true" 
                className={qp["preference"]}>Custom
                </Link>
            </li>


        </ul>
        </BodyComponent>
        
    )
}

export default QuizPreference;
import React from "react";
import br from "./BarIndicator.module.css";
import { useSelector } from "react-redux";

const BarIndicator=()=>{
    const {topics,difficulty,itemTotal,timer} = useSelector(state => state.quizModification);

    console.log(topics)
    return(
        <section className={br["bar-indicator__container"]}>
            <div></div>
        </section>
    )
}

export default BarIndicator;
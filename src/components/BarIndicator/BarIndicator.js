import React from "react";
import styles from "./BarIndicator.module.css";
import { useSelector } from "react-redux";

const BarIndicator=({})=>{
      const {topics} = useSelector(state=>state.quizModification);
     
    // const {topics,difficulty,itemTotal,timer} = useSelector(state => state.quizModification);
    // return(
    //     <section className={br["bar-indicator__container"]}>
    //         <div>Hello Indicator</div>
    //     </section>
    // )

    const steps = ["Introduction", "Questions", "Review", "Completion"];

    return (
      <div className={styles.progressBarContainer}>
        {steps.map((step, index) => (
          <div key={index} className={styles.stepContainer}>
            <div
              className={
                styles.activeStep
              }
            >
              {step}
            </div>
          </div>
        ))}
      </div>
    );
}

export default BarIndicator;
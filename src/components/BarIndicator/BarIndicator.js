import React from "react";
import styles from "./BarIndicator.module.css";
import { useSelector } from "react-redux";
// import { AnimatePresence } from "framer-motion";

const BarIndicator=()=>{
        
      const {topics,difficulty,itemTotal,timer} = useSelector(state=>state.quizModification);
     
    // const {topics,difficulty,itemTotal,timer} = useSelector(state => state.quizModification);
    // return(
    //     <section className={br["bar-indicator__container"]}>
    //         <div>Hello Indicator</div>
    //     </section>
    // )

    const INDICATORS = [
      {name:"Topics",
      value: topics.length
      }, 
      {name:"Difficulty",
      value:difficulty}, 
      {name:"Item Total",
        value: itemTotal
      }, 
      {
        name:"Timer",
        value:timer
      }];

    return (
      <div className={styles.progressBarContainer}>
        {INDICATORS.map(val=>(<div className={styles.stepContainer}>
            <div
              className={
                styles.activeStep
              }
            >
              <span>
              {val.value}
              </span>

              <div>
                {val.name}
            </div>
            </div>
        </div>))}
        
        
      </div>
    );
}

export default BarIndicator;
import React from "react";
import styles from "./BarIndicator.module.css";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

// import { AnimatePresence } from "framer-motion";

const BarIndicator=()=>{
        
      const {topics,difficulty,itemTotal,timer} = useSelector(state=>state.quizModification);
      
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
        {INDICATORS.map(val=>(
          <motion.div 
            className={styles.stepContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >
        
              <span className={styles["value"]}>
              {val.value === "" ? "(No Value)" : val.value}
              </span>

              <div className={
                styles.activeStep
              }>
                {val.name}
              </div>
           
        </motion.div>))}
        
        
      </div>
    );
}

export default BarIndicator;
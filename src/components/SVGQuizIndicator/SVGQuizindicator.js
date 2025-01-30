import React from "react";
import { motion } from "framer-motion";
import svg from "./SVGQuizIndicator.module.css";

const SVGQuizIndicator = ({quizModifiedValue})=>{
    const isExpanded = quizModifiedValue === 'active';
    return(
        <React.Fragment>
            {!isExpanded &&
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className={`bi bi-arrows-angle-contract ${svg["svg-icon"]}`}
                viewBox="0 0 16 16"
                initial={{scale: 1 }}
                animate={{ scale: isExpanded ? 1 : .75 }}
                transition={{ duration: 0.3 }}
                >   
                <path
                    fillRule="evenodd"
                    d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707M15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707"
                />
            </motion.svg>
            }

        {isExpanded &&
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className={`bi bi-arrows-angle-expand ${svg["svg-icon"]}`} 
                viewBox="0 0 16 16"
                initial={{scale: .75 }}
                animate={{ scale: isExpanded ? .75 : 1 }}
                transition={{ duration: 0.3 }}
                >
                <path fillRule="evenodd" 
                d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707"/>
            </motion.svg>
        }
        </React.Fragment>
    )
}

export default SVGQuizIndicator;
import React from "react";

const AnswerItem = ({text,getAnswer})=>{

    
    return (
        <div onClick={getAnswer}>
            {text}
        </div>
    )
}


export default AnswerItem;
import React from "react";

const AnswerItem = ({text,getAnswer,classId})=>{
    return (
        <div onClick={getAnswer} className={classId}>
            {text}
        </div>
    )
}


export default AnswerItem;
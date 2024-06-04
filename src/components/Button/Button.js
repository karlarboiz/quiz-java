import React from "react";
import quiz from "./Button.module.css";

const Button = (props) =>{
    return (
        <button type={props.type} className={quiz['btn']}>{props.children}</button>
    )
}


export default Button;
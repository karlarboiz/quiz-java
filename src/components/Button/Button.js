import React from "react";
import quiz from "./Button.module.css";

const Button = (props) => {
    let btnText = (props.btnState === 'submitting' || props.btnState === 'loading') ? 'Loading...' : props.children;
    return (
        // <button type={props.type} className={quiz['btn']} disabled={props.btnState === 'submitting'}>{btnText}</button>
        <button {...props} className={quiz['btn']}>{btnText}</button>
    )
}


export default Button;
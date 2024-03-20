import React from "react";
import './Button.css';

const Button = ({btnTitle,type}) =>{
    return (
        <button type={type}>{btnTitle}</button>
    )
}


export default Button;
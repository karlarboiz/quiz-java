import React from "react";
import { createPortal } from "react-dom";
import quiz from "./Modal.module.css";

const Modal = (props)=>{

    return createPortal(
        <div className={quiz['overlay']} onClick={props.closeTopic}></div>,

        document.querySelector("#modal")
    )
}

export default Modal;
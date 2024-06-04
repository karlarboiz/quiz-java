import React from "react";
import quiz from "./BodyComponent.module.css";

const BodyComponent = (props)=>{
    return (
        <main className={quiz['main-design']}>
            {props.children}
        </main>
    )
}

export default BodyComponent;
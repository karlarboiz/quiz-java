import React from "react";
import { Outlet } from "react-router";
import NavBar from "../NavBar/NavBar";

const QuizRoot = ()=>{
    return(
        <React.Fragment>
            <Outlet/>
        </React.Fragment>
    )
}

export default QuizRoot;
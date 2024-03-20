import React from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router";
const AppGate = ()=>{
    return (
        <React.Fragment>
            <NavBar/>
            <Outlet/>
        </React.Fragment>
    )
} 

export default AppGate;
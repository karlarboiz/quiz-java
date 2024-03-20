import React, { useEffect } from "react";

import { Navigate } from "react-router";
import { useDispatch} from "react-redux";
import { updateAuth } from "../../store/auth-action";
const Logout = ()=>{
    const dispatch = useDispatch();
    
    localStorage.clear();    
    let token = localStorage.getItem("token");
  
    useEffect(()=>{
  
        dispatch(updateAuth(token));
    },[dispatch,token])
    return(
        <Navigate to="/" />
    )
    

}

export default Logout;
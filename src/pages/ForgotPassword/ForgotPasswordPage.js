import React from "react";
import { useSelector } from "react-redux";
import ForgotPassword from "./ForgotPassword";
import { json, Navigate } from "react-router";


const ForgotPasswordPage = ()=>{

       const auth = useSelector(state => state.auth);


    return (
        <React.Fragment>
             {!auth.auth && <ForgotPassword />}
             {auth.auth && <Navigate to="/main" replace="true" />}
        </React.Fragment>
    )
}


export default ForgotPasswordPage;



export async function forgotPasswordHandler({request,params}){
    
    const data = await request.formData();

    const errorResult = {};
    const loginData = {
        email: await data.get('email'),

    }  

    const result = await fetch(`${process.env.REACT_APP_API_URL}quiz/api/forgot-password`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })   


    if (!result.ok) {
        throw json({ message: "Something went wrong" },
            { status: 500 })
    }

    console.log(await result.json());

    // const resData = await result.json();

    // console.log(resData)
    
    return {kwan:"Kwan"};

}

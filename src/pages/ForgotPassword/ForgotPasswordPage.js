import React,{useEffect} from "react";
import { useSelector } from "react-redux";
import { updateAuth } from "../../store/auth-action";
import { useDispatch } from "react-redux";
import ForgotPassword from "./ForgotPassword";
import { json, Navigate } from "react-router";


const ForgotPasswordPage = ()=>{

       const auth = useSelector(state => state.auth);
        const token = localStorage.getItem("token");
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(updateAuth(token));
        }, [dispatch, auth, token])

    return (
        <React.Fragment>
             {!auth.auth && <ForgotPassword />}
             {auth.auth && <Navigate to="/main" replace="true" />}
        </React.Fragment>
    )
}


export async function forgotPasswordHandler({request,params}){
    const data = await request.formData();
    const errorResult = {};
    const loginData = {
        email: data.get('email'),

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

    const resData = await result.json();
    errorResult.valid = resData.isValid;
    errorResult.message = resData.message;

    localStorage.setItem("token", resData?.token);
    return resData;

}

export default ForgotPasswordPage;
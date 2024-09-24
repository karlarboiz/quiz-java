import React from "react";
import Register from "./Register";
import { Navigate, json, redirect} from "react-router";
import { useSelector } from "react-redux";

const RegisterPage = () => {

    const auth = useSelector(state => state.auth);  
    return (
        <React.Fragment>
            {auth?.auth&& <Navigate to="/main" />}
            {!auth?.auth && <Register />}
        </React.Fragment>
    )
}

export default RegisterPage;


export async function checkLoggedInStatus() {

}

export async function registerHandler({ request, params }) {
    const errorResult = {};
    const data = await request.formData();
    const registerData = {
        firstName: data.get('first-name'),
        lastName: data.get('last-name'),
        email: data.get('email'),
        username: data.get('username'),
        password: data.get('password'),
        isUpdate: false
    }

    const result = await fetch(`${process.env.REACT_APP_API_URL}quiz/api/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerData)
    })

    if (result.status === 422 || result.status === 401) {

        errorResult.success = false;
        errorResult.message = "Error/s with Input Fields";

        return errorResult;
    }


    else if (!result.ok) {
        throw json({ message: "Something went wrong" },
            { status: 500 })
    }
    const resData = await result.json();


        if (!resData?.success) {
            return resData;

        } else {
            return redirect("/register");
        }

}
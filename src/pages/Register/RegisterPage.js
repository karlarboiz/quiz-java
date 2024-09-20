import React from "react";
import Register from "./Register";
import { Navigate, json, redirect, useActionData } from "react-router";

const RegisterPage = () => {
    const data = useActionData();
    
    return (
        <React.Fragment>
            {data?.success&& <Navigate to="/main" />}
            {!data?.success && <Register />}
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

    console.log("registration ni cya");

    console.log(resData.success);
    if (!resData?.success) {
        return redirect("/main");

    } else {
        return redirect("/register");
    }

}
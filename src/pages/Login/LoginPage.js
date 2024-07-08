import React, { useEffect } from "react";

import { Navigate, json} from "react-router";
import { useSelector } from "react-redux";
import { updateAuth } from "../../store/auth-action";
import { useDispatch } from "react-redux";
import Login from "./Login";

const LoginPage = () => {
    const auth = useSelector(state => state.auth);
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(updateAuth(token));


    }, [dispatch, auth, token])

    return (
        <React.Fragment>
            {!auth.auth && <Login />}
            {auth.auth && <Navigate to="/main" replace="true" />}
        </React.Fragment>
    )
}

export default LoginPage;

export async function loginHandler({ request, params }) {
    const data = await request.formData();
    const errorResult = {};
    const loginData = {
        email: data.get('email'),
        password: data.get('password')
    }

    const result = await fetch("http://localhost:8080/quiz/api/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })

    const resData = await result.json();


    if (resData.isValid) {

        errorResult.valid = resData.isValid;
        errorResult.message = resData.message;

        return errorResult;
    }

    else if (!result.ok) {
        throw json({ message: "Something went wrong" },
            { status: 500 })
    }

    localStorage.setItem("token", resData?.token);
    return resData;
}



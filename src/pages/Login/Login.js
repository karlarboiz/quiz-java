import React, { useEffect } from "react";
import { Form, Navigate, useActionData, useNavigation } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useDispatch } from "react-redux";
import { updateAuth } from "../../store/auth-action";

import logincss from "./Login.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Login = () => {

    const data = useActionData();
    const submit = useNavigation();
    const state = submit.state;

    const dispatch = useDispatch();
    
    useEffect(() => {
        if (data?.token !== null ||
        data?.token !== undefined) {
            localStorage.setItem("token", data?.token)
            dispatch(updateAuth(data?.token));
            <Navigate to="/main" />
        }
    }, [data, dispatch])

    return (
        <React.Fragment>
            {!data?.valid && <div>{data?.message}</div>}
            <Form method="post" className={logincss.form}>
                <section className={logincss['form--section-1']}>
                    <LazyLoadImage src={require("../../pictures/trivia.png")}
                        alt="Brand Image" />

                    <div className={logincss['title']}>Login</div>
                </section>

                <section className={logincss['form--section-2']}>
                    <div className={logincss['form-group']}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" />

                    </div>

                    <div className={logincss['form-group']}>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />
                    </div>


                    <Button type="submit" btnState={state}> Submit </Button>
                </section>
            </Form>
        </React.Fragment>
    )
}

export default Login;
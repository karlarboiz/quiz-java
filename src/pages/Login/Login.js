import React, { useEffect } from "react";
import { Form, Navigate, useActionData} from "react-router-dom";
import Button from "../../components/Button/Button";
import { useDispatch} from "react-redux";
import { updateAuth } from "../../store/auth-action";

import logincss from "./Login.module.css";


const Login = ()=>{

    const data = useActionData();
    
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
    useEffect(()=>{


        if(data?.token !== null ||
            token !== null ||
            token !== undefined) {
            localStorage.setItem("token",data?.token || token)
            dispatch(updateAuth(data?.token || token));
            <Navigate to="/main"/>
        }
    },[data,dispatch,token])
 
    
    return(
        <React.Fragment>
            <Form method="post" className={logincss.form}>
                <div className={logincss['form-group']}>
                    <label htmlFor="email">Email</label>
                    <input type="email"  name="email"/>
               
                </div>

                <div className={logincss['form-group']}>
                    <label htmlFor="password">Password</label>
                    <input type="password"  name="password"/>
                </div>

               
                <Button type="submit"> Submit </Button>
            </Form>
        </React.Fragment>
    )
}

export default Login;
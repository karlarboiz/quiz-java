import React, { useEffect } from "react";
import { Form, Navigate, useActionData} from "react-router-dom";
import Button from "../../components/Button/Button";

import { useDispatch} from "react-redux";
import { updateAuth } from "../../store/auth-action";

const Login = ()=>{

    const data = useActionData();
    
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
    useEffect(()=>{

        console.log(data)
        if(data?.token !== null ||
            token !== null ||
            token !== undefined) {
            localStorage.setItem("token",data?.token || token)
            dispatch(updateAuth(data?.token || token));
            <Navigate to="/main"/>
        }
    },[data,dispatch])
 
    
    return(
        <React.Fragment>
            <Form method="post">
                <div>
                <label htmlFor="email">Email</label>
                <input type="email"  name="email"/>
               
                </div>

                <div>
                <label htmlFor="password">Password</label>
                <input type="password"  name="password"/>
                </div>

               
                <Button btnTitle="Submit" type="submit"/>
            </Form>
        </React.Fragment>
    )
}

export default Login;
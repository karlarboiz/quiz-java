import React from "react";
import { Form } from "react-router-dom";
import Button from "../../components/Button/Button";
const Register = ()=>{

    return (
        <React.Fragment>
           <Form method="post">
           <h1>Registration page</h1>
            <div>
                <label htmlFor="first-name">First Name</label>
                <input type="text" name="first-name"/>
            </div>
            <div>
                <label htmlFor="last-name">Last Name </label>
                <input type="text" name="last-name"/>
            </div>
            <div>
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email"/>
            </div>
            <div>
                <label htmlFor="username"> Username</label>
                <input type="text" name="username"/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password"/>
            </div>
            <div>
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" name="confirm-password"/>
            </div>

            <Button btnTitle="Submit" type="submit"/>
           </Form>
        </React.Fragment>
    )
}


export default Register;
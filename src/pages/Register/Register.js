import React from "react";
import { Form } from "react-router-dom";
import Button from "../../components/Button/Button";
import quiz from "./Register.module.css";
const Register = ()=>{

    return (
       
           <Form method="post" className={quiz['register-form']}>
           <h1>Registration page</h1>
            <div className={quiz['form-group']}>
                <label htmlFor="first-name">First Name</label>
                <input type="text" name="first-name"/>
            </div>
            <div className={quiz['form-group']}>
                <label htmlFor="last-name">Last Name </label>
                <input type="text" name="last-name"/>
            </div>
            <div className={quiz['form-group']}>
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email"/>
            </div>
            <div className={quiz['form-group']}>
                <label htmlFor="username"> Username</label>
                <input type="text" name="username"/>
            </div>
            <div className={quiz['form-group']}>
                <label htmlFor="password">Password</label>
                <input type="password" name="password"/>
            </div>
            <div className={quiz['form-group']}>
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" name="confirm-password"/>
            </div>

            <Button btnTitle="Submit" type="submit"/>
           </Form>
      
    )
}


export default Register;
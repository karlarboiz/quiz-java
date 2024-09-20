import React from "react";
import { Form, useNavigation } from "react-router-dom";
import Button from "../../components/Button/Button";
import quiz from "./Register.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
const Register = () => {
    const submit = useNavigation();
    const state = submit.state;
    return (
        <motion.div
        initial={{
            opacity:0,
            y: +25
        }}
        animate={{
            opacity:1,
            y: 0,
       
        }}
        
        transition={{
            duration:.5,
            type: 'tween'
        }}
        
        >
            <Form method="post" className={quiz['form']}>
            <section className={quiz['form--section-1']}>
                <LazyLoadImage src={require("../../pictures/trivia.png")}
                    alt="Brand Image" />

                <div className={quiz['title']}>Register</div>
            </section>

            <section className={quiz['form--section-2']}>
                <div className={quiz['form-group']}>
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" name="first-name" />
                </div>
                <div className={quiz['form-group']}>
                    <label htmlFor="last-name">Last Name </label>
                    <input type="text" name="last-name" />
                </div>
                <div className={quiz['form-group']}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" />
                </div>
                <div className={quiz['form-group']}>
                    <label htmlFor="username"> Username</label>
                    <input type="text" name="username" />
                </div>
                <div className={quiz['form-group']}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                </div>
                <div className={quiz['form-group']}>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" name="confirm-password" />
                </div>

                <Button type="submit" btnState={state}>Register</Button>
            </section>


        </Form>


        </motion.div>
        
    )
}


export default Register;
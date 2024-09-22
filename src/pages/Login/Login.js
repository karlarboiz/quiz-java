import React, { useEffect } from "react";
import { Form, Navigate, useActionData, useNavigation } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useDispatch } from "react-redux";
import { updateAuth } from "../../store/auth-action";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import logincss from "./Login.module.css";


const Login = () => {

    const data = useActionData();
    const submit = useNavigation();
    const state = submit.state;

    const dispatch = useDispatch();
    
    useEffect(() => {
        if (data?.valid) {
            localStorage.setItem("token", data?.token)
            dispatch(updateAuth(data?.token));
            <Navigate to="/main" />
        }else {
            return;
        }
    }, [data, dispatch])

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
        }}>
           
            <Form method="post" className={logincss.form}>
                {!data?.valid && <div className={logincss.error}>{data?.message}</div>}
                {(data?.responseAuthErrors) &&
                    data?.responseAuthErrors.map((val,i)=>{
                        return (
                            <motion.li
                            initial={{
                                opacity:0,
                                y: .5,
                            }}
    
                            animate={{
                                opacity:1,
                                y: 0,
                            
                            }}
    
                            transition={{
                                duration:.5,
                                type: 'tween'
                            }}

                            key={i}
                            
                            className={logincss.error}>{val}</motion.li>
                        )
                    })
           
                }   
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


                    <Button type="submit" btnState={state} > Submit </Button>
                </section>
            </Form>
        </motion.div>
    )
}

export default Login;
import React, { useEffect } from "react";
import { Form, Link, Navigate, useActionData, useNavigation } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useDispatch } from "react-redux";
import { updateAuth } from "../../store/auth-action";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import logincss from "./Login.module.css";
import ErrorItem from "../../components/ErrorItem/ErrorItem";


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
                {!data?.valid && <div className={logincss["error-main"]}>{data?.message}</div>}
           
                <section className={logincss['form--section-1']}>
                    <LazyLoadImage src={require("../../pictures/trivia.png")}
                        alt="Brand Image" />

                    <div className={logincss['title']}>Login</div>
                </section>

                <section className={logincss['form--section-2']}>
                    <div >
                        <div className={logincss['form-group']}>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email"  />
                        </div>
                         {data?.errorlist?.email.map((val,i)=><ErrorItem key={i} message={val}/>)
                
                        }   
                    </div>

                    <div >
                        <div className={logincss['form-group']}>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" />

                        </div>
                        {data?.errorlist?.password.map((val,i)=><ErrorItem key={i} message={val}/>)
                
                        }   
                    </div>
                   <div className={logincss["footer"]}>
                   <Button type="submit" btnState={state} > Submit </Button>
                   <Link to="/forgot-password" relative="false">Forgot Password</Link>
                   </div>
                </section>
            </Form>
        </motion.div>
    )
}

export default Login;
import React, { useState } from "react";
import { json } from "react-router-dom";
import Button from "../../components/Button/Button";
import quiz from "./Register.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import ErrorItem from "../../components/ErrorItem/ErrorItem";

const Register = () => {
    
    const [data,setData] = useState(null)

    const [imageHere,setImage]= useState("");
    const [imageFile,setImageFile] = useState(null);

    async function process(e){
        e.preventDefault();
        const errorResult = {};
        
        const userInfo = {
            firstName: e.target["first-name"].value,
            lastName: e.target["last-name"].value,
            email: e.target["email"].value,
            username: e.target["username"].value,
            password: e.target["password"].value,
            isUpdate: false
        }
   

        const newForm = new FormData();

    
        newForm.append("image",imageFile)
        newForm.append("userinfo",new Blob([JSON.stringify(userInfo)], {
            type: "application/json",
          }));
          
        const result = await fetch(`http://localhost:8080/quiz/api/register`, {
            method: "POST",
            body: newForm,
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
       
        setData(resData)
    }   
    
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

            <form onSubmit={process} className={quiz['form']}>
            <div className={data?.valid ? quiz.success : `${quiz.error} ${quiz["error-main"]}`}>{data?.message}</div>
      
            <section className={quiz['form--section-1']}>
                <LazyLoadImage src={require("../../pictures/trivia.png")}
                    alt="Brand Image" />

                <div className={quiz['title']}>Register</div>
            </section>

            <section className={quiz['form--section-2']}>
                <div>
                    <div className={quiz['form-group']}>
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" name="first-name" />
                    </div>
                    {!data?.valid && data?.errorlist?.firstName?.map((val,i)=><ErrorItem key={i} message={val}/>)}   
                </div>
                <div >
                    <div className={quiz['form-group']}>

                        <label htmlFor="last-name">Last Name </label>
                        <input type="text" name="last-name" />
                    </div>
                    {!data?.valid && data?.errorlist?.lastName?.map((val,i)=><ErrorItem key={i} message={val}/>)}   
           
                </div>
                <div>
                    <div className={quiz['form-group']}>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" />
                        
                    </div>
                    {!data?.valid && data?.errorlist?.email?.map((val,i)=><ErrorItem key={i} message={val}/>)} 
                </div>
                <div>
                    <div className={quiz['form-group']}>
                        <label htmlFor="username"> Username</label>
                        <input type="text" name="username" />
                    </div>
                    {!data?.valid && data?.errorlist?.username?.map((val,i)=><ErrorItem key={i} message={val}/>)} 
                </div>
                <div>
                    <div className={quiz['form-group']}>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />
                    </div>
                    {!data?.valid && data?.errorlist?.password?.map((val,i)=><ErrorItem key={i} message={val}/>)} 
                </div>
                <div className={quiz['form-group']}>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" name="confirm-password" />
                </div> 
                <div>
                    <div className={quiz['form-group']}>
                        <img src={`${imageHere}`} alt="This is the profile"/>
                        <label htmlFor="image">Profile Image</label>
                        <input type="file" name="image" 
                        accept="image/png, image/jpeg" onChange={(e)=>{
                            setImage(URL.createObjectURL(e.target.files[0]))
                            setImageFile(e.target.files[0])
                         
                        }}/>
                    </div>
                    {/* {!data?.valid && data?.errorlist?.firstName?.map((val,i)=><ErrorItem key={i} message={val}/>)}    */}
                </div>
               <div className={quiz["footer"]}>
                <Button type="submit" >Register</Button>
               </div>
            </section>


        </form>




        </motion.div>
        
    )
}


export default Register;
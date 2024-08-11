import React from "react";
import BodyComponent from "../../components/BodyComponent/BodyComponent";
import { Form } from "react-router-dom";
import Button from "../../components/Button/Button";
import profile from "./Profile.module.css";
const Profile = ({data}) => {
    let {firstName, lastName,email, username} = data;
    
    return (
        <BodyComponent>
            <Form method="put" className={profile['profile-form']}>
                <div className={profile['form-group']}>
                    <label htmlFor="first-name">First Name</label>
                    <input value={firstName} name="first-name" id="first-name" onChange={(e)=>{console.log("hello")}}/>
                </div>

                <div className={profile['form-group']}>
                    <label htmlFor="last-name">Last Name</label>
                    <input value={lastName} name="last-name" id="last-name" onChange={(e)=>{console.log("hello")}}/>
                </div>

                <div className={profile['form-group']}>
                    <label htmlFor="username">Username</label>
                    <input value={username} name="username" id="username" onChange={(e)=>{console.log("hello")}}/>
                </div>

                <div className={profile['form-group']}>
                    <label htmlFor="email">Email Addres</label>
                    <input value={email} name="email" id="email" onChange={(e)=>{console.log("hello")}}/>
                </div>
                
                <Button type="submit">Update</Button>

            </Form>
        </BodyComponent>
    )
}

export default Profile;
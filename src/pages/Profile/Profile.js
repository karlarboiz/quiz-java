import React from "react";
import BodyComponent from "../../components/BodyComponent/BodyComponent";
import { Form } from "react-router-dom";

import Button from "../../components/Button/Button";
const Profile = ({data}) => {
    let {firstName, lastName,email, username} = data;
    

    return (
        <BodyComponent>
            <Form>
                <div className="form-group">
                    <label>First Name</label>
                    <input value={firstName} name="first-name" onChange={(e)=>{console.log("hello")}}/>
                </div>

                <div className="form-group">
                    <label>Last Name</label>
                    <input value={lastName} name="last-name" onChange={(e)=>{console.log("hello")}}/>
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input value={username} name="username" onChange={(e)=>{console.log("hello")}}/>
                </div>

                <div className="form-group">
                    <label>Email Addres</label>
                    <input value={email} name="email" onChange={(e)=>{console.log("hello")}}/>
                </div>
                
                <Button >Update</Button>

            </Form>
        </BodyComponent>
    )
}

export default Profile;
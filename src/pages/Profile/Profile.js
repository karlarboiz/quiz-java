import React,{useState} from "react";
import BodyComponent from "../../components/BodyComponent/BodyComponent";
import { Form } from "react-router-dom";
import Button from "../../components/Button/Button";
import profile from "./Profile.module.css";
const Profile = ({data}) => {
    const {firstName, lastName,email, username} = data;
    const [userFirstName, setUserFirstName] = useState(firstName);
    const [userLastName,setUserLastName] = useState(lastName);
    const [userEmail,setUserEmail] = useState(email);
    const [userUsername, setUserUsername] = useState(username);
    return (
        <BodyComponent>
            <Form method="put" className={profile['profile-form']}>
                <div className={profile['form-group']}>
                    <label htmlFor="first-name">First Name</label>
                    <input value={userFirstName} name="first-name" id="first-name" onChange={(e)=>{setUserFirstName(e.target.value)}}/>
                </div>

                <div className={profile['form-group']}>
                    <label htmlFor="last-name">Last Name</label>
                    <input value={userLastName} name="last-name" id="last-name" onChange={(e)=>{setUserLastName(e.target.value)}}/>
                </div>

                <div className={profile['form-group']}>
                    <label htmlFor="username">Username</label>
                    <input value={userUsername} name="username" id="username" onChange={(e)=>{setUserUsername(e.target.value)}}/>
                </div>

                <div className={profile['form-group']}>
                    <label htmlFor="email">Email Addres</label>
                    <input value={userEmail} name="email" id="email" onChange={(e)=>{setUserEmail(e.target.value)}}/>
                </div>
                
                <Button type="submit">Update</Button>

            </Form>
        </BodyComponent>
    )
}

export default Profile;
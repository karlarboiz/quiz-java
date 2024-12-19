import React,{useState} from "react";
import BodyComponent from "../../components/BodyComponent/BodyComponent";
import { Form } from "react-router-dom";
import Button from "../../components/Button/Button";
import profile from "./Profile.module.css";
import ToggleButton from "../../components/ToggleButton/ToggleButton";
import {useSelector} from "react-redux";

const Profile = ({data}) => {

    const toggle = useSelector(state=>state.toggle);
    const {toggled} = toggle;

    const {firstName, lastName,email, username,displayPicture} = data;
    const [userFirstName, setUserFirstName] = useState(firstName);
    const [userLastName,setUserLastName] = useState(lastName);
    const [userEmail,setUserEmail] = useState(email);
    const [userUsername, setUserUsername] = useState(username);
    


    return (
        <BodyComponent>
            <div className={profile["background"]}>
          
            </div>
            <Form method="put" className={profile['profile-form']}>
                <ToggleButton/>
                <div className={profile['form-group']}>
               
                    <img src={`${process.env.REACT_APP_API_URL}quiz/api/info${displayPicture}`} 
                    className={profile["profile-image"]} alt="Hello there" />
                </div>
                <div className={profile['form-group']}>
                    {toggled && <>
                        <label htmlFor="first-name" className={profile["label"]}>First Name</label>
                        <input value={userFirstName} name="first-name" id="first-name" onChange={(e)=>{setUserFirstName(e.target.value)}}/>
                        </>}
                    {!toggled && <>
                        <div>{userFirstName}</div>
                    </>}
                </div>

                <div className={profile['form-group']}>
                {toggled && <>
                    <label htmlFor="last-name" className={profile["label"]}>Last Name</label>
                    <input value={userLastName} name="last-name" id="last-name" onChange={(e)=>{setUserLastName(e.target.value)}}/>
                        </>}
                    {!toggled && <>
                        <div>{userLastName}</div>
                    </>}

                   
                </div>

                <div className={profile['form-group']}>
                {toggled && <>
                    <label htmlFor="username" className={profile["label"]}>Username</label>
                    <input value={userUsername} name="username" id="username" onChange={(e)=>{setUserUsername(e.target.value)}}/>
                        </>}
                    {!toggled && <>
                        <div>{userUsername}</div>
                    </>}
                    
                </div>

                <div className={profile['form-group']}>

                {toggled && <>
                    <label htmlFor="email" className={profile["label"]}>Email Addres</label>
                    <input value={userEmail} name="email" id="email" onChange={(e)=>{setUserEmail(e.target.value)}}/>
                        </>}
                    {!toggled && <>
                        <div>{userEmail}</div>
                    </>}

                    
                </div>
                
                <div className={profile["form-group"]}>

                       {toggled && <>
                        <label htmlFor="password" className={profile["label"]}>New Password</label>
                        <input  name="password" 
                        id="password" />
                        </>}
        
                </div>

                <div className={profile["form-group"]}>
                        {toggled && <>
                            <label htmlFor="confirm-password" className={profile["label"]}>Confirm New Password</label>
                    <input name="confirm-password" 
                    id="password" /></>}
 
                </div>
                <Button type="submit">Update</Button>
                
            </Form>
        </BodyComponent>
    )
}

export default Profile;
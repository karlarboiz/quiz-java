import React from "react";
import { useSelector } from "react-redux";
const Main = ({data1})=>{
    const auth = useSelector(state => state.auth);  
    console.log(data1);

    return(
        <React.Fragment>
            <div>Hello, {auth.username}</div>            
        </React.Fragment>
    )

}

export default Main;
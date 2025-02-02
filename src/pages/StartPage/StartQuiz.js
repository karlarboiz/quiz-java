import React,{useEffect} from "react";
import { useDispatch} from "react-redux";
import { updateAuth } from "../../store/auth-action";
import BodyComponent from "../../components/BodyComponent/BodyComponent";
import useTimer from "../../hooks/useTimer";
import BarIndicator from "../../components/BarIndicator/BarIndicator";

const StartQuiz = ()=>{
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
    
    useEffect(()=>{
        if(token !== null ||
            token !== undefined) {
            dispatch(updateAuth(token));
        
        }
    },[dispatch,token])

    // will work with timer quiz once implementation I found a work around

    const handleTimeUp = () => {
        console.log("somethign")
      };

    const {timer}= useTimer(10,handleTimeUp);
    
    useEffect(()=>{
        console.log(timer);
    },[timer])

    
    return (

        <BodyComponent>
            <BarIndicator/>
        </BodyComponent>
  
    )
}

export default StartQuiz;
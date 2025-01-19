import React,{useEffect} from "react";
import { useSelector } from "react-redux";
import { updateAuth } from "../../store/auth-action";
import { useDispatch } from "react-redux";
import ForgotPassword from "./ForgotPassword";
import { Navigate } from "react-router";



const ForgotPasswordPage = ()=>{

       const auth = useSelector(state => state.auth);
        const token = localStorage.getItem("token");
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(updateAuth(token));
        }, [dispatch, auth, token])

    return (
        <React.Fragment>
             {!auth.auth && <ForgotPassword />}
             {auth.auth && <Navigate to="/main" replace="true" />}
        </React.Fragment>
    )
}

export default ForgotPasswordPage;
import { json } from "react-router";
export function getAuthToken(){
    const token = localStorage.getItem('token');
    return token;
}

export function tokenLoaderHandler(){
    return getAuthToken();
}

export function checkAuthLoader(){
    const token = getAuthToken();

    if(!token) {
        throw json({message: "Something went wrong"},
        {status: 404})
    }
}
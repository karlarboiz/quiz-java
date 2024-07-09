import { authAction } from "."

export const fetchAuthProfile = ()=>{
    return async(dispatch)=>{

        const fetchData = async()=>{
            const response =await  fetch("http://localhost:8080/main/user/profile",{
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })

            if(!response.ok){

                
                throw new Error('Something went wrong!')
            }

            const data = await response.json();

            return data;
        }
      
        try{
            const authData = await fetchData();
          
            if(authData?.status === 500){
                localStorage.clear();
                dispatch(authAction.authActive({
                    auth: false,
                    username: "",
                    message: authData?.message
                }));       
            }else {
                dispatch(authAction.authActive({
                    auth: authData.auth,
                    username: authData.username,
                    message: authData.message
                }));    
            }
         
         }catch(error){
            dispatch(authAction.authActive({
                auth: false,
                username: "",
                message: error.message
            }));     
         }
    }
}

export const updateAuth = (token)=>{
    return async(dispatch)=>{
        const fetchData = async()=>{
            const response =await fetch("http://localhost:8080/main/user/profile",{
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })

            if(!response.ok){
                throw new Error('Something went wrong!')
            }

            const data = await response.json();

            return data;
        }
      
        try{
            const authData = await fetchData();
            
            if(authData?.status === 500){
                localStorage.clear();
                dispatch(authAction.authActive({
                    auth: false,
                    username: "",
                    message: authData?.message
                }));       
            }else {
                dispatch(authAction.authActive({
                    auth: authData.auth,
                    username: authData.username,
                    message: authData.message
                }));    
            }

         }catch(error){
            dispatch(authAction.authActive({
                auth: false,
                username: "",
                message: error.message
            }));     
         }
    }
}

export const logoutHandler = ()=>{
    return async(dispatch)=>{
        dispatch(authAction.authActive({
            auth: false,
            username: "",
            message: "Successfully Logout"
        }));    
        
    }
}
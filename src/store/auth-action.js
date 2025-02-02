import { authAction } from "."

export const fetchAuthProfile = () => {
    return async (dispatch) => {
      const fetchData = async () => {
        const token = localStorage.getItem("token");
        
        if (!token) {
          // Handle missing token case directly
          throw new Error("User is not logged in.");
        }
  
        const response = await fetch(`${process.env.REACT_APP_API_URL}main/user/profile`, {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });
  
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
  
        const data = await response.json();
        return data;
      };

   
  
      try {
        const authData = await fetchData();
     
        if (authData?.status === 500) {
          localStorage.clear();
          dispatch(
            authAction.authActive({
              auth: false,
              username: "",
              message: authData?.message,
              loading: false
            })
          );
        } else {
          dispatch(
            authAction.authActive({
              auth: authData.auth,
              username: authData.username,
              message: authData.message,
              loading: false
            })
          );
        }
      } catch (error) {
        dispatch(
          authAction.authActive({
            auth: false,
            username: "",
            message: error.message,
            loading: false
          })
        );
      }
    };
  };
  

export const updateAuth = (token)=>{
    return async(dispatch)=>{
        const fetchData = async()=>{
            const response =await fetch(`${process.env.REACT_APP_API_URL}main/user/profile`,{
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
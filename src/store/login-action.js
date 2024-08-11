import { loginAction } from ".";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const postData = createAsyncThunk('postData',
    async (data, thunkAPI) => {
        const response =await fetch(`${process.env.REACT_APP_API_URL}quiz/api/credentials-verify`,{
            method: "post",
            body: JSON.stringify(data)
        })

        if(!response.ok){
            throw new Error('Something went wrong!')
        }

        console.log(await response.json());

        return await response.json();

    }
)

export const loginVerify = (body)=>{
    return async(dispatch)=>{
        const fetchData = async()=>{
            const response =await fetch(`${process.env.REACT_APP_API_URL}quiz/api/credentials-verify`,{
                body: JSON.stringify(body)
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
            
                dispatch(loginAction.loginCheck({
                    token: "",
                    message: authData?.message,
                    valid: false
                }));       
            }else {
                dispatch(loginAction.loginCheck({
                    token: authData?.token,
                    message: authData?.message,
                    valid: authData.valid,
                }));    
            }

         }catch(error){
            dispatch(loginAction.loginCheck({
                token: "",
                message: error.message,
                valid: false
            }));       
         }
    }
}


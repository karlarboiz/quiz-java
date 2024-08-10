
import { quizItemsAction } from "."
export const fetchQuizItems = (token)=>{
    return async(dispatch)=>{
        const fetchData = async()=>{
            const response =await fetch(`${process.env.REACT_APP_API_URL}main/user/quiz-items`,{
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
            const quizItemsData = await fetchData();
           
            dispatch(quizItemsAction.collectQuizItems({
                collected: true,
                items: quizItemsData
             }));       

         }catch(error){
            dispatch(quizItemsAction.collectQuizItems({
                collected: false,
                items: []
             }));       
         }
    }
}
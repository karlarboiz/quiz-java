import { quizItemAction } from "."

export const fetchQuizItem = (quizIdTag)=>{
    return async(dispatch)=>{
        const fetchData = async()=>{
            const response =await fetch(`https://the-trivia-api.com/v2/question/${quizIdTag}`);

            if(!response.ok){
                throw new Error('Something went wrong!')
            }

            const data = await response.json();
           
            return data;
        }
      
        try{
            const quizItemData = await fetchData();
       
            dispatch(quizItemAction.collectQuizItem({
                ready: true,
                quizDetails: quizItemData
             }));       

         }catch(error){
            dispatch(quizItemAction.collectQuizItem({
                ready: false,
                quizDetails: {}
             }));       
         }
    }
}
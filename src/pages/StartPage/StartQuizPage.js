import React from "react";
import StartQuiz from "./StartQuiz";
import { useSelector } from "react-redux";
import { Navigate, json,redirect} from "react-router";
import { useQuery } from '@tanstack/react-query';

const StartQuizPage = ()=>{
    const {topics,difficulty,itemTotal} = useSelector(state=>state.quizModification);
    
    const isPageReady = topics.length > 0 && 
    difficulty && itemTotal >0;    

    const auth = useSelector(state => state.auth);  


     const { data: quizzes, isLoading, error } = useQuery({
        queryKey: ["questions", topics, itemTotal, difficulty], // Include dependencies
        queryFn: async () => {
          const response = await fetch(
            `https://the-trivia-api.com/api/questions?categories=${topics.join(",")}&limit=${itemTotal}&region=PH&difficulty=${difficulty}`
          );
          return response.json(); // Properly return parsed JSON
        },
        enabled: topics.length > 0, // Prevent fetching when topics array is empty
      });


      console.log(quizzes)

    return (
        
        <React.Fragment>
            {!isPageReady && <Navigate to="/login" replace="true"/>}
            { !auth.loading && auth?.auth && <StartQuiz />}
            {  !auth.loading && !auth?.auth  && <Navigate to="/login" replace="true"/>}           
        </React.Fragment>
    )
}


export default StartQuizPage;

export async function updateQuizItemHandler({request,params}){
    const requestData = await request.formData();

    const id = requestData.get("id");
    const quizIdTag = requestData.get("quiz-tag");
    const userAnswer = requestData.get("user-answer");
    
    let data;
    let dataResult;


    const urlDecided = id ? `${process.env.REACT_APP_API_URL}main/user/game-resume/${Number(id)}` :  `${process.env.REACT_APP_API_URL}main/user/game`;

    try {
        data = await fetch(urlDecided,{
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                "Authorization" : `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({ 
                quizIdTag: quizIdTag,
                userAnswer:userAnswer
            })
        })

        if(!data.ok) {
            throw json({message: "Something went wrong"},
            {status: 500})
        }

        dataResult = await data.json();
    }catch(e){
        console.log(e);
    }

    redirect("/start-page")

    return dataResult;

}





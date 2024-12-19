import React from "react";
import TriviaModification from "./TriviaModification";

const TriviaModificationPage = () =>{
    return (
        <React.Fragment>
            <TriviaModification/>
        </React.Fragment>
    )
}

export default TriviaModificationPage;


export async function saveItemsForTheGameHandler({request,param}) {
    
    const data = await request.formData();
    const categories =data.getAll("topic"); 
    const categoriesJoined =   categories.join(",");
    const difficulty = data.get("difficulty");
    const itemTotal = data.get("item-total")

    let data1;
    let dataResult;
    let gotData = false;
    let error = {};
    try{
        data1 = await fetch(`https://the-trivia-api.com/api/questions?categories=${categoriesJoined}&limit=${itemTotal}&region=PH&difficulty=${difficulty}`,{
            headers: {
                'Content-Type': 'application/json'
              }
        });

        if(!data1.ok || data1.status === 422 
            || data1.status === 401 || data1.status === 501) {
                error.message = "Something went wrong!"
                error.success = false;
                gotData = false;
        }

        dataResult = await data1.json();
        gotData = true
    }catch(e){
        error.message = "Something went wrong!"
        error.success = false;
        gotData = false;
    }
   

    if(!gotData) {

        return error;
    }

    let startData;
    let startDataResult;
    let saveGameStatus = false

    let quizData = dataResult.map(val=> {
        let objectId = {};
        objectId.id = val.id;
        objectId.correctAnswer = val.correctAnswer;
        return objectId;
    });

    try{
        startData = await fetch(`${process.env.REACT_APP_API_URL}main/user/start`,{
            method: "post",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
            body: JSON.stringify(quizData)
        });

        if(!startData.ok || startData.status === 422 
            || startData.status === 401 || startData.status === 501
            || startData.status === 400) {
                error.message = "Something went wrong!"
                error.success = false;
                saveGameStatus = false;
        }

        startDataResult = await startData.json();   
        saveGameStatus = true
    }catch(e){
        error.message = "Something went wrong!"
        error.success = false;
        saveGameStatus = false;
    }

    if(!saveGameStatus) {
        return error;
    }else {
        return startDataResult;
    }
}

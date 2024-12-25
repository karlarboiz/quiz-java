import React,{useEffect,useState} from "react";
// import { Form } from "react-router-dom";
import { useActionData,useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Topic from "../../components/ChoiceGroup/TopicGroup/Topic";
import Difficulty from "../../components/ChoiceGroup/DifficultyGroup/Difficulty";
import ItemTotal from "../../components/ChoiceGroup/ItemTotalGroup/ItemTotal";
import quiz from "./TriviaModification.module.css";
import BodyComponent from "../../components/BodyComponent/BodyComponent";
import BarIndicator from "../../components/BarIndicator/BarIndicator";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import Timer from "../../components/ChoiceGroup/TimerGroup/Timer";
import SVGQuizIndicator from "../../components/SVGQuizIndicator/SVGQuizindicator";

const TriviaModification = ()=>{
    const [topic,setTopic] = useState(false);
    const [diff,setDiff] = useState(false);
    const data = useActionData();
    const navigate = useNavigate();
    const topics = useSelector(state=>state.quizModification);

    function openTopic(){
        setTopic(val=>!val ? true: false);
    }

    function openDiff(){
        setDiff(val=>!val);
    }

    useEffect(()=>{
        if(data?.success) {
            navigate("/start-page");
        }
    },[data,navigate])


    async function generateQuestions(){
        // const data = await request.formData();
        // const categories =data.getAll("topic"); 
        // const categoriesJoined =  categories.join(",");
        // const difficulty = data.get("difficulty");
        // const itemTotal = data.get("item-total")

        // let data1;
        // let dataResult;
        // let gotData = false;
        // let error = {};
        // try{
        //     data1 = await fetch(`https://the-trivia-api.com/api/questions?categories=${categoriesJoined}&limit=${itemTotal}&region=PH&difficulty=${difficulty}`,{
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     });

        //     if(!data1.ok || data1.status === 422 
        //         || data1.status === 401 || data1.status === 501) {
        //             error.message = "Something went wrong!"
        //             error.success = false;
        //             gotData = false;
        //     }

        //     dataResult = await data1.json();
        //     gotData = true
        // }catch(e){
        //     error.message = "Something went wrong!"
        //     error.success = false;
        //     gotData = false;
        // }
    

        // if(!gotData) {

        //     return error;
        // }

    }

    return (
        <BodyComponent>
            <BarIndicator/>
            <section className={quiz['quiz-modification']}>
                <div onClick={openTopic} className={`${quiz["topic-trigger"]} ${quiz["trigger"]}`}> 
                    <span>Topic</span> 
                    
                    <SVGQuizIndicator isExpanded={topic}/>
                </div>
                <AnimatePresence>
                {topic && <Topic topicModalHandler={openTopic}/>}

                </AnimatePresence>
                <div onClick={openDiff} className={quiz["trigger"]  }> 
                    <span>Difficulty</span> 
                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrows-angle-contract" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707M15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707"/>
                    </svg>
                </div>
                {diff && <Difficulty/>}
                <ItemTotal/>
                
                <Timer/>
           
                <Button type="submit"> Begin</Button>

            </section>
        </BodyComponent>
    )
}

export default TriviaModification;
import React,{useEffect,useState} from "react";
import { Form } from "react-router-dom";
import { useActionData,useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Topic from "../../components/ChoiceGroup/TopicGroup/Topic";
import Difficulty from "../../components/ChoiceGroup/DifficultyGroup/Difficulty";
import ItemTotal from "../../components/ChoiceGroup/ItemTotalGroup/ItemTotal";
import quiz from "./TriviaModification.module.css";
import BodyComponent from "../../components/BodyComponent/BodyComponent";

const TriviaModification = ()=>{
    const [topic,setTopic] = useState(false);
    const [diff,setDiff] = useState(false);
    const data = useActionData();
    const navigate = useNavigate();

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




    return (
        <BodyComponent>
            {/* {topic && <Modal closeTopic={openTopic}/>} */}
            <Form method="post"  className={quiz['quiz-modification']}>
                <div onClick={openTopic} className={`${quiz["topic-trigger"]} ${quiz["trigger"]}`}> 
                    <span>Topic</span> 
                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrows-angle-contract" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707M15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707"/>
                    </svg>
                </div>
                {topic && <Topic topicModalHandler={openTopic}/>}

                <div onClick={openDiff} className={`${quiz["difficulty-trigger"]} ${quiz["trigger"]}`}> 
                    <span>Difficulty</span> 
                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrows-angle-contract" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707M15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707"/>
                    </svg>
                </div>
                {diff && <Difficulty/>}
                <ItemTotal/>
                

                {/* <div>
                    <label htmlFor="timer" >Timer:</label>

                    <select name="timer" >
                        <option value=""></option>
                        <option value="5">
                            5
                        </option>
                        <option value="10">
                            10
                        </option>
                        <option value="15">
                            15
                        </option>
                    </select>
                </div> */}
           
                <Button type="submit"> Begin</Button>

            </Form>
        </BodyComponent>
    )
}

export default TriviaModification;
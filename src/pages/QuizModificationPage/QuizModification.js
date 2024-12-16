import React,{useEffect,useState} from "react";
import { Form } from "react-router-dom";
import { useActionData,useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Topic from "../../components/ChoiceGroup/TopicGroup/Topic";
import Difficulty from "../../components/ChoiceGroup/DifficultyGroup/Difficulty";
import ItemTotal from "../../components/ChoiceGroup/ItemTotalGroup/ItemTotal";
import quiz from "./QuizModification.module.css";
import BodyComponent from "../../components/BodyComponent/BodyComponent";
import Modal from "../../components/Modal/Modal";

const QuizModification = ()=>{
    const [topic,setTopic] = useState(false);
    const data = useActionData();
    const navigate = useNavigate();

    function openTopic(){
       
        setTopic(val=>!val ? true: false);
    }

    useEffect(()=>{

        if(data?.success) {
            navigate("/start-page");
        }
    },[data,navigate])




    return (
        <BodyComponent>
            {topic && <Modal closeTopic={openTopic}/>}
            <Form method="post"  className={quiz['quiz-modification']}>
                <Button type="button" onClick={openTopic}>Topic <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-text" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
  <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8m0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
</svg></Button>

                <Difficulty/>
                <ItemTotal/>
                {topic && <Topic topicModalHandler={openTopic}/>
                    }

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

export default QuizModification;
import React,{useEffect} from "react";
import { Form } from "react-router-dom";
import { useActionData,useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Topic from "../../components/ChoiceGroup/TopicGroup/Topic";
import Difficulty from "../../components/ChoiceGroup/DifficultyGroup/Difficulty";
import ItemTotal from "../../components/ChoiceGroup/ItemTotalGroup/ItemTotal";
import quiz from "./QuizModification.module.css";
import BodyComponent from "../../components/BodyComponent/BodyComponent";

const QuizModification = ()=>{

    const data = useActionData();
    const navigate = useNavigate();

    useEffect(()=>{

        if(data?.success) {
            navigate("/start-page");
        }
    },[data,navigate])

    return (
        <BodyComponent>
          
            <Form method="post"  className={quiz['quiz-modification']}>
                <Topic/>
                <Difficulty/>
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

export default QuizModification;
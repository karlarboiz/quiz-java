import React,{useEffect} from "react";
import { Form } from "react-router-dom";
import Button from "../../components/Button/Button";
import Topic from "../../components/ChoiceGroup/TopicGroup/Topic";
import Difficulty from "../../components/ChoiceGroup/DifficultyGroup/Difficulty";

import { useActionData,useNavigate } from "react-router-dom";
const QuizModification = ()=>{

    const data = useActionData();
    const navigate = useNavigate();

    useEffect(()=>{

        if(data?.success) {
            navigate("/start-page");
        }
    },[data,navigate])

    return (
        <React.Fragment>
          
            <Form method="post">
            

            <Topic/>
            <Difficulty/>

            <div>
            <label htmlFor="item-total" >Item Total</label>
                <select name="item-total" >
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
            </div>

            <div>
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
            </div>
           
            <Button btnTitle="Submit" type="submit"/>

            </Form>
        </React.Fragment>
    )
}

export default QuizModification;
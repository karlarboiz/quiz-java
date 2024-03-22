import React,{useEffect} from "react";
import { Form } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useActionData, useNavigate } from "react-router";
const Main = ()=>{
   
    const data = useActionData();
    const navigate = useNavigate();

    useEffect(()=>{

        if(data?.success) {
            navigate("/start-page");
        }
    },[data,navigate])

    return(
        <React.Fragment>
            <Form method="post">
            <h1>Main</h1>
            <div>
                <label htmlFor="category">Category</label>
                <select name="category">
                    <option value=""></option>
                    <option value="geography">Geography</option>
                    <option value="history">History</option>
                    <option value="science">Science</option>
                    <option value="music">Music</option>
                </select>
            </div>
            <div>
            <label htmlFor="difficulty">Difficulty</label>
                <select name="difficulty" >
                <option value=""></option>
                    <option value="easy">
                        Normal
                    </option>
                    <option value="medium">
                        Medium
                    </option>
                    <option value="difficult">
                        Difficult
                    </option>
                </select>
            </div>

            <div>
            <label htmlFor="item-total" >Item Total</label>
                <select name="item-total" >
                <option value=""></option>oo
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

export default Main;
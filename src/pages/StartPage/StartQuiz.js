
import React,{useEffect} from "react";
import { Form, Link} from "react-router-dom";
import QuizItemPage from "../../components/QuizItemPage/QuizItemPage";
import { useDispatch, useSelector } from "react-redux";
import { updateAuth } from "../../store/auth-action";

const StartQuiz = ({items})=>{
    const {collected,items:quizItems} = items;
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();
    let quizItemsAnswered = quizItems?.filter(val=> {
        if(val?.answered) {
            return val
        };
    })

    let reversedQuizItems = quizItems.toReversed();

    const quizAnswer = useSelector(state=> state.quizAnswer);
    
    const changeItem = quizItems?.filter(val=>{
        if(val?.answered) return val;
    })

    let valuePresented = reversedQuizItems[changeItem.length] || null;
    
    let something = collected && <QuizItemPage quizIdTag={valuePresented?.quizIdTag}/>

    let completedQuiz = quizItems?.length === quizItemsAnswered?.length;

    useEffect(()=>{
    
        if(token !== null ||
            token !== undefined) {
            
            dispatch(updateAuth(token));
        
        }
    },[dispatch,token])
    
    
    return (
        <React.Fragment>
           {!collected && <p>Loading</p>}

           {(collected && !completedQuiz) &&  <main> 
                <Form method="put">
                    <input type="hidden" value={valuePresented?.quizIdTag} name="quiz-tag"/>
             
                    <input type="hidden" value={quizAnswer.userAnswer} name="user-answer"/>
                    {something}
             
                    <button type="submit">Next</button>
                </Form>
                
                        
            </main>}

            {completedQuiz && <>

                <p>Quiz Completed</p>

                <Link to="/score" replace="true"> Score </Link>
            </> }
            
            
        </React.Fragment>
    )
}

export default StartQuiz;
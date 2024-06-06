import React,{useEffect} from "react";
import { Form, Link} from "react-router-dom";
import QuizItemPage from "../../components/QuizItemPage/QuizItemPage";
import { useDispatch, useSelector } from "react-redux";
import { updateAuth } from "../../store/auth-action";
import BodyComponent from "../../components/BodyComponent/BodyComponent";
import Button from "../../components/Button/Button";
//import useTimer from "../../hooks/useTimer";
const StartQuiz = ({items,id,returnedData})=>{

    const scoreUrl = id ? "score": "/score";

    const dispatch = useDispatch();
    
    const {collected,items:quizItems} = items;

    const token = localStorage.getItem("token");
    
    let quizItemsAnswered = quizItems.filter(val=> {
        if(val?.answered) {
            return val
        }else {
            return null;
        };
    })

    let reversedQuizItems = quizItems.toReversed();

    const quizAnswer = useSelector(state=> state.quizAnswer);
    
    const changeItem = quizItems?.filter(val=>{ 
        if(val?.answered) {
            return val;
        }else {
            return null;
        }
    })

    let valuePresented = reversedQuizItems[changeItem.length] || null;

    let completedQuiz = quizItems?.length === quizItemsAnswered?.length;


    
    useEffect(()=>{
    
        if(token !== null ||
            token !== undefined) {
            
            dispatch(updateAuth(token));
        
        }
    },[dispatch,token])

    // will work with timer quiz once implementation I found a work around


    // const handleTimeUp = () => {
    //     if (nextBtnRef.current) {
    //         console.log(nextBtnRef.current)
    //       nextBtnRef.current.addEventListener('click', handleTimeUp); 
    //     }
    //   };

    //   const {timer}= useTimer(10,handleTimeUp);
    
    
    return (

        <BodyComponent>
                 {!collected && <p>Loading</p>}

                {(collected && !completedQuiz) &&  
                    <Form method="put">

                        <input type="hidden" value={valuePresented?.quizIdTag} name="quiz-tag"/>
                        <input type="hidden" value={id} name="id"/>
                        <input type="hidden" value={quizAnswer.userAnswer} name="user-answer"/>
                        <QuizItemPage quizIdTag={valuePresented?.quizIdTag} itemsLeft={quizItems?.length - quizItemsAnswered?.length}/>

                        {/* <Button type="submit"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg></Button> */}

                        <Button type="submit">Next</Button>
                    
                    </Form>
                }

                {completedQuiz && <>

                    <p>Quiz Completed</p>
                    <Link to={scoreUrl} replace="true"> Score </Link>
                </> }
        </BodyComponent>
  
    )
}

export default StartQuiz;
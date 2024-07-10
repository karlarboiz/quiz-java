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
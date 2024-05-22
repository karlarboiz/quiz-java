import React,{useEffect} from "react";
import { Form, Link} from "react-router-dom";
import QuizItemPage from "../../components/QuizItemPage/QuizItemPage";
import { useDispatch, useSelector } from "react-redux";
import { updateAuth } from "../../store/auth-action";
//import useTimer from "../../hooks/useTimer";
const StartQuiz = ({items,id,returnedData})=>{

    const scoreUrl = id ? "score": "/score";
    
    console.log(returnedData);

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
    
    let something = collected && <QuizItemPage quizIdTag={valuePresented?.quizIdTag}/>

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
        <React.Fragment>
           {!collected && <p>Loading</p>}

           {(collected && !completedQuiz) &&  <main> 
                <Form method="put">
        
                    <input type="hidden" value={valuePresented?.quizIdTag} name="quiz-tag"/>
                    <input type="hidden" value={id} name="id"/>
                    <input type="hidden" value={quizAnswer.userAnswer} name="user-answer"/>
                    {something}

                    <button type="submit">Next</button>
                
                </Form>
                
                        
            </main>}

            {completedQuiz && <>

                <p>Quiz Completed</p>
                <Link to={scoreUrl} replace="true"> Score </Link>
            </> }
            
            
        </React.Fragment>
    )
}

export default StartQuiz;
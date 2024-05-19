import React,{useEffect,useRef} from "react";
import { Form, Link} from "react-router-dom";
import QuizItemPage from "../../components/QuizItemPage/QuizItemPage";
import { useDispatch, useSelector } from "react-redux";
import { updateAuth } from "../../store/auth-action";
import useTimer from "../../hooks/useTimer";
const StartQuiz = ({items,id})=>{

    console.log(items);
    const formRef = useRef();
    

    const dispatch = useDispatch();

    const isPathRelative = <Link to="score" replace="true"> Score </Link>;
    
    const {collected,items:quizItems} = items;

    const token = localStorage.getItem("token");
    
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

    const handleTimeUp = () => {
        if (formRef.current) {
          formRef.current.submit(); 
        }
      };

      const {timer}= useTimer(30,handleTimeUp);
    
    
    return (
        <React.Fragment>
           {!collected && <p>Loading</p>}

           {(collected && !completedQuiz) &&  <main> 
                <Form ref={formRef}>
                <p>{timer}</p>
                    <input type="hidden" value={valuePresented?.quizIdTag} name="quiz-tag"/>
                    <input type="hidden" value={id} name="id"/>
                    <input type="hidden" value={quizAnswer.userAnswer} name="user-answer"/>
                    {something}
                
                </Form>
                
                        
            </main>}

            {completedQuiz && <>

                <p>Quiz Completed</p>
                {isPathRelative}
                
            </> }
            
            
        </React.Fragment>
    )
}

export default StartQuiz;
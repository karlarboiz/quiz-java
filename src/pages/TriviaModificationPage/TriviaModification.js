import React,{useEffect,useState} from "react";
import { useActionData,useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Topic from "../../components/ChoiceGroup/TopicGroup/Topic";
import Difficulty from "../../components/ChoiceGroup/DifficultyGroup/Difficulty";
import ItemTotal from "../../components/ChoiceGroup/ItemTotalGroup/ItemTotal";
import quiz from "./TriviaModification.module.css";
import BodyComponent from "../../components/BodyComponent/BodyComponent";
import BarIndicator from "../../components/BarIndicator/BarIndicator";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import Timer from "../../components/ChoiceGroup/TimerGroup/Timer";
import SVGQuizIndicator from "../../components/SVGQuizIndicator/SVGQuizindicator";

const TriviaModification = ()=>{
    const [topic,setTopic] = useState(false);
    const [diff,setDiff] = useState(false);
    const [itemTotal,setItemTotal] = useState(false);
    const [timer,setTimer] = useState(false);
    const [playerReady,setPlayerReady] = useState(false);
    const data = useActionData();
    const navigate = useNavigate();
    const {topics,difficulty,
        itemTotal:itemTotalUpdated,timer:timerUpdated} 
        = useSelector(state=>state.quizModification);
    
    const isBarIndicatorShown = topics.length > 0 || 
    difficulty || itemTotalUpdated >0;    

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

    useEffect(()=>{
        
        console.log(topics.length);
        console.log(difficulty);
        console.log(itemTotalUpdated);
        setPlayerReady(topics.length > 0 && 
            difficulty && itemTotalUpdated >0)
    },[topics,difficulty,timerUpdated,itemTotalUpdated])

    console.log(playerReady);

    async function generateQuestions(){
        // const data = await request.formData();
        // const categories =data.getAll("topic"); 
        // const categoriesJoined =  categories.join(",");
        // const difficulty = data.get("difficulty");
        // const itemTotal = data.get("item-total")

        // let data1;
        // let dataResult;
        // let gotData = false;
        // let error = {};
        // try{
        //     data1 = await fetch(`https://the-trivia-api.com/api/questions?categories=${categoriesJoined}&limit=${itemTotal}&region=PH&difficulty=${difficulty}`,{
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     });

        //     if(!data1.ok || data1.status === 422 
        //         || data1.status === 401 || data1.status === 501) {
        //             error.message = "Something went wrong!"
        //             error.success = false;
        //             gotData = false;
        //     }

        //     dataResult = await data1.json();
        //     gotData = true
        // }catch(e){
        //     error.message = "Something went wrong!"
        //     error.success = false;
        //     gotData = false;
        // }
    

        // if(!gotData) {

        //     return error;
        // }

    }

    const topicValue = topic? 'active': 'inactive';

    const diffValue = diff? 'active': 'inactive';

    return (
        <BodyComponent>
              <AnimatePresence>
              {isBarIndicatorShown && <BarIndicator/>}
              </AnimatePresence>
            
            <section className={quiz['quiz-modification']}>
                
                <div onClick={openTopic} className={`${quiz["topic-trigger"]} ${quiz["trigger"]}`}> 
                    <span className={quiz["choice-title"]}>Topic</span>                 
                    <SVGQuizIndicator quizModifiedValue={topicValue}/>
                </div>
                <AnimatePresence>
                {topic && <Topic topicModalHandler={openTopic}/>}
                </AnimatePresence>

                <div onClick={openDiff} className={quiz["trigger"]  }> 
                    <span className={quiz["choice-title"]}>Difficulty</span> 
                    <SVGQuizIndicator quizModifiedValue={diffValue}/>
                </div>
                {diff && <Difficulty/>}

                <div onClick={()=>setItemTotal(val=>val ? false: true)} className={quiz["trigger"]  }> 
                    <span className={quiz["choice-title"]}>ItemTotal</span> 
                    <SVGQuizIndicator quizModifiedValue={itemTotal === true ? 'active': 'inactive'}/>
                </div>

                <AnimatePresence>
                {itemTotal && <ItemTotal/>}
                
                </AnimatePresence>

                <div onClick={()=>setTimer(val=>val ? false: true)} className={quiz["trigger"]  }> 
                    <span className={quiz["choice-title"]}>Timer </span> 
                    <SVGQuizIndicator quizModifiedValue={timer === true ? 'active': 'inactive'}/>
                </div>

                <AnimatePresence>
                {timer && <Timer/>}
                
                </AnimatePresence>
                

                <AnimatePresence>
                    {playerReady && <Button type="submit"> Begin</Button>}
                </AnimatePresence>

            </section>
        </BodyComponent>
    )
}

export default TriviaModification;
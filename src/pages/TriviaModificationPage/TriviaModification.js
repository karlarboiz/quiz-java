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
import { AnimatePresence, motion } from "framer-motion";
import Timer from "../../components/ChoiceGroup/TimerGroup/Timer";
import SVGQuizIndicator from "../../components/SVGQuizIndicator/SVGQuizindicator";
// import { useQuery } from '@tanstack/react-query';

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
    
        setPlayerReady(topics.length > 0 && 
            difficulty && itemTotalUpdated >0)
    },[topics,difficulty,timerUpdated,itemTotalUpdated])


    // const { data: quizzes, isLoading, error } = useQuery({
    //     queryKey: ["questions", topics, itemTotal, difficulty], // Include dependencies
    //     queryFn: async () => {
    //       const response = await fetch(
    //         `https://the-trivia-api.com/api/questions?categories=${topics.join(",")}&limit=${itemTotal}&region=PH&difficulty=${difficulty}`
    //       );
    //       return response.json(); // Properly return parsed JSON
    //     },
    //     enabled: topics.length > 0, // Prevent fetching when topics array is empty
    //   });

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
                    {playerReady && 
                        <motion.div
                        className={quiz["button-section"]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>
                            <Button type="submit"> Begin</Button>
                        </motion.div>}
                </AnimatePresence>

            </section>
        </BodyComponent>
    )
}

export default TriviaModification;
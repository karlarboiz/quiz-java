import React from "react";
import quiz from "../ChoiceGroup.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
import { addTopicBitByBitHandler } from "../../../store/quizmodification-action";
import { motion,AnimatePresence} from "framer-motion";

const categoriesArr = [{
    value: "geography",
    textValue: "Geography",
    pic: "geography.jpg",
},
{
    value: "history",
    textValue: "History",
    pic: "history.jpg"
},
{
    value: "science",
    textValue: "Science",
    pic: "science.jpg"
},
{
    value: "music",
    textValue: "Music",
    pic: "music.jpg"
},
{
    value: "sport_and_leisure",
    textValue: "Sport and Leisure",
    pic: "sport_and_leisure.jpg"
},
{
    value: "film_and_tv",
    textValue: "Film and TV",
    pic: "film_and_tv.jpg"
},
{
    value: "arts_and_literature",
    textValue: "Arts and Literature",
},
{
    value: "society_and_culture",
    textValue: "Society and Culture",
    pic: "society_and_culture.jpg"
},
{
    value: "food_and_drink",
    textValue: "Food and Drink",
    pic: "food_and_drink.jpg"
},
{
    value: "general_knowledge",
    textValue: "General Knowledge",
    pic: "general_knowledge.jpg"
}]


const listVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.1, // Each child will animate one after another
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

const Topic = () => {
    const {topics} = useSelector(state=>state.quizModification);
 
    const topicArr = topics; 
    const dispatch = useDispatch();

    /**
     * 
     * @param {*} 
     * this function is used to pick at least 
     * 5 topics
     */
    function selectTopicHandler(e){    
        const clickedTab = e.target.tabIndex;
        const value = e.target.value;
    
       dispatch(addTopicBitByBitHandler(clickedTab,value))
    }

    const isTopicArrFull = topicArr.length === 5;

    return (
        <React.Fragment>
            
            <motion.section
            className={quiz["topic-group"]}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={listVariants}
          >
            {categoriesArr.map((val, i) => (
              <motion.div
                key={val.value}
                className={`${quiz["multiple-choice__group"]} ${quiz["multiple-choice__group-topic"]}`}
                variants={itemVariants}
              >

                <AnimatePresence>
                    {!topicArr.find((valIn) => valIn.value === val.value) &&
                <motion.div className={quiz["topic-modal"]}
                key="modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                ></motion.div>
                }
                </AnimatePresence>
                
                <label htmlFor="topic" className={quiz["label"]}>
                  {val.textValue}
                </label>

                {!isTopicArrFull && (
                  <input
                    type="checkbox"
                    tabIndex={i}
                    name="topic"
                    id={val.value}
                    value={val.value}
                    onChange={selectTopicHandler}
                    checked={!!topicArr?.find((valIn) => valIn.value === val.value)} 
                  />
                )}
                <LazyLoadImage
                  src={require(`../../../pictures/${val.value}.jpg`)}
                  className={quiz["img"]}
                  alt={val.textValue}
                  effect="blur"
                />
              </motion.div>
            ))}
          </motion.section>

        {/* <ul>
            {topicArr.map((val,i)=>
            <motion.li key={i} 
            onClick={selectTopicHandler} 
            value={val.value}
            tabIndex={val.index} 
            title="child-topic"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={listVariants}>
                {categoriesArr.find(val2=>val2.value === val.value)["textValue"]}
            </motion.li>)}
        </ul> */}
        </React.Fragment>
    )
}

export default Topic;
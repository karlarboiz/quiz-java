import React from "react";
import quiz from "../ChoiceGroup.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CloseButton from "../../CloseButton/CloseButton";
import { createPortal } from "react-dom";


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

const Topic = ({topicModalHandler}) => {

    return createPortal(
        <React.Fragment>
            <CloseButton closeTopicHandler={topicModalHandler}/>
            <section className={quiz['topic-group']} >
                
                {categoriesArr.map(val => (
                    <div key={val.value} className={`${quiz["multiple-choice__group"]} ${quiz["multiple-choice__group-topic"]}`}>
                        <label htmlFor="topic">{val.textValue}</label>
                        <input type="checkbox" name="topic" id={val.value} value={val.value} />

                        <LazyLoadImage src={require(`../../../pictures/${val.value}.jpg`)}
                            className={quiz['img']}

                            alt={val.textValue}
                        />

                    </div>
                ))} 
            </section>
        </React.Fragment>,
        document.querySelector("#modal")
    )
}

export default Topic;
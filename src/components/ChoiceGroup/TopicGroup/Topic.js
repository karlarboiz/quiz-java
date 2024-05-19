import React from "react";
import quiz from "../ChoiceGroup.module.css";
const categoriesArr = [{
    value: "geography",
    textValue: "Geography",   
   },
   {
   value: "history",
   textValue: "History",   
   },
   {
   value: "science",
   textValue: "Science",   
   },
   {
   value: "music",
   textValue: "Music",   
   },
   {
   value: "sport_and_leisure",
   textValue: "Sport and Leisure",   
   }, 
   {
   value: "film_and_tv",
   textValue: "Film and TV",   
   },
   {
   value: "arts_and_literature",
   textValue: "Arts and Literature",   
   },
   {
   value: "society_and_culture",
   textValue: "Society and Culture",   
   },
   {
   value: "food_and_drink",
   textValue: "Food and Drink",   
   },
   {
   value: "general_knowledge",
   textValue: "General Knowledge"
   }]

   const Topic = ()=>{
    return (
        <section>
             {categoriesArr.map(val=>(
              <div key={val.value}>
                    <label htmlFor="topic">{val.textValue}</label>
                    <input type="checkbox" name="topic" id={val.value} value={val.value}/>
              </div>  
            ))}
        </section>
    )
   }

   export default Topic;
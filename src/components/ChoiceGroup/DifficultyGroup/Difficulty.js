import React from "react";
import quiz from "../ChoiceGroup.module.css";
  //arr for difficulty options
  const difficultyArr = [
    {value: "easy",
    textValue: "Easy"},
    {value: "medium",
    textValue: "Medium"},
    {value: "hard",
    textValue: "Hard"}
    ]


const Difficulty = ()=>{

    return (
        <section className={quiz['difficulty-group']}>
           {
            difficultyArr.map(val=>(
                <div key={val.value} className={`${quiz["multiple-choice__group"]} ${quiz["multiple-choice__group-difficulty"]}`}>
                    <label htmlFor="difficulty" className={quiz["label"]}>{val.textValue}</label>
                    <input type="radio" id={val.value} name="difficulty" value={val.value}/>
                </div>
            ))
           }
        </section>
    )
}

export default Difficulty;


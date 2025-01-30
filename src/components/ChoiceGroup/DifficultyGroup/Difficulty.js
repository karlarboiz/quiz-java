import React from "react";
import quiz from "../ChoiceGroup.module.css";
import { addDifficultyHandler } from "../../../store/quizmodification-action";
import { useDispatch } from "react-redux";

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
    const dispatch = useDispatch();
    function handleDifficultyChoice(e){
        dispatch(addDifficultyHandler(e.target.value))
    }   
        
    return (
        <section className={quiz['choice-group']}>
           {
            difficultyArr.map(val=>(
                <div key={val.value} className={`${quiz["multiple-choice__group"]} ${quiz["multiple-choice__group-difficulty"]}`}>
                    <label htmlFor="difficulty" className={quiz["label"]}>{val.textValue}</label>
                    <input type="radio" id={val.value} name="difficulty" value={val.value}
                    onChange={handleDifficultyChoice}/>
                </div>
            ))
           }
        </section>
    )
}

export default Difficulty;


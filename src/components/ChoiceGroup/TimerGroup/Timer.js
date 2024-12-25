import React from "react";
import quiz from "../ChoiceGroup.module.css"
import { addTimerHandler } from "../../../store/quizmodification-action";
import { useDispatch } from "react-redux";

const TIMER_SELECTIONS = [
    {textValue:5,
        value:5
    },
    {textValue:10,
        value:10
    },
    {textValue:15,
        value:15
    },
]

const Timer = ()=>{
    const dispatch = useDispatch();

    function getTimerValueHandler(e){
        dispatch(addTimerHandler(e.target.value));
    }
    return (
        <section className={quiz['choice-group']}>
            
            {TIMER_SELECTIONS.map(val=>

            <div key={val.value} className={`${quiz["multiple-choice__group"]} ${quiz["multiple-choice__group-difficulty"]}`}>
            <label htmlFor="item-total" className={quiz["label"]}>{val.textValue}</label>
            <input type="radio" id={val.value} name="difficulty" value={val.value}
            onChange={getTimerValueHandler}/>
            </div>
            )}
        </section>
    )
}

export default Timer;
import React from "react";
import quiz from "../ChoiceGroup.module.css";
import { addItemTotalHandler } from "../../../store/quizmodification-action";
import { useDispatch } from "react-redux";

const itemTotalArr = [
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

const ItemTotal = ()=>{
    const dispatch = useDispatch();

    function getItemTotalValueHandler(e){
        dispatch(addItemTotalHandler(e.target.value))
    }
    return (
        <section className={quiz['choice-group']}>
            
            {itemTotalArr.map(val=>

            <div key={val.value} className={`${quiz["multiple-choice__group"]} ${quiz["multiple-choice__group-difficulty"]}`}>
            <label 
            htmlFor="item-total" 
            className={quiz["label"]}>
                {val.textValue}</label>
            
            <input 
            type="radio" 
            id={val.value} 
            name="item-total" value={val.value}
            onChange={getItemTotalValueHandler}/>
            </div>
            )}
        </section>
    )
}

export default ItemTotal;
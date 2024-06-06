import React from "react";
import quiz from "../ChoiceGroup.module.css";
const ItemTotal = ()=>{
    return (
        <section className={quiz['total-group']}>
            <label htmlFor="item-total">Item Total</label>
            <select name="item-total" >
                <option value=""></option>
                <option value="5">
                    5
                </option>
                <option value="10">
                    10
                </option>
                <option value="15">
                    15
                </option>
            </select>
        </section>
    )
}

export default ItemTotal;
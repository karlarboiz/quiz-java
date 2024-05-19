import React from "react";

const ItemTotal = ()=>{
    return (
        <div>
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
                </div>
    )
}

export default ItemTotal;
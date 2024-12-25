import React from "react";

const Timer = ()=>{
    return (
        <div>
        <label htmlFor="timer" >Timer:</label>
        <select name="timer" >
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

export default Timer;
import React from "react";

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
        <aside>
           {
            difficultyArr.map(val=>(
                <div key={val.value}>
                    <label htmlFor="difficulty">{val.textValue}</label>
                    <input type="radio" id={val.value} name="difficulty" value={val.value}/>
                </div>
            ))
           }
        </aside>
    )
}

export default Difficulty;


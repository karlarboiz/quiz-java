import { createSlice } from "@reduxjs/toolkit";

const quizModificationSlice = createSlice({
    name: 'topics',
    initialState: {
        topics:[],
        difficulty: "easy",
        itemTotal: 5,
        timer:5
    },
    reducers: {
        addTopicBitByBit(state,action) {
            const clickedTab = action.payload.clickedTab;
            const value = action.payload.value;
            const indexCheckArr = state.topics.filter((val)=>val?.index === clickedTab);

            if(indexCheckArr.length > 0){
                const newArr = state.topics.filter(val=> val.index !== clickedTab)                   
                state.topics = newArr;
            }else {
                state.topics.push({index:clickedTab,value: value})
            }        
            
        },
        addDifficulty(state,action){
            state.difficulty = action.payload.difficulty
        },
        addItemTotal(state,action){
            state.itemTotal = action.payload.itemTotal
        },
        addTimer(state,action){
            state.timer = action.payload.timer
        }

    }
  
})

export default quizModificationSlice;
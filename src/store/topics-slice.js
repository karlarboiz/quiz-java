import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics:[]
    },
    reducers: {
        addTopics(state,action){
            state.topics = action.payload.topics;
        },
        addTopicBitByBit(state,action) {
            const clickedTab = action.payload.clickedTab;
            const value = action.payload.value;
            const indexCheckArr = state.topics.filter((val)=>val?.index === clickedTab);

            console.log(action )
            if(indexCheckArr.length > 0){
                const newArr = state.topics.filter(val=> val.index !== clickedTab)                   
                state.topics = newArr;
            }else {
                state.topics.push({index:clickedTab,value: value})
            }        
            
        }
    }
  
})

export default topicsSlice;
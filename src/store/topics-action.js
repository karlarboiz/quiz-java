import { topicsAction } from ".";

export const addTopicsHandler=(state)=>{
    console.log(state)
    topicsAction.addTopics({
        topics:state
    })
}

export const addTopicBitByBitHandler=(clickedTab,value)=>{
       
    return async(dispatch)=>{
        dispatch(topicsAction.addTopicBitByBit({
            clickedTab:clickedTab,
            value:value
        }))
    }
}
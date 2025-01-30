import { quizModificationAction } from "."

export const addTopicBitByBitHandler=(clickedTab,value)=>{
       
    return async(dispatch)=>{
        dispatch(quizModificationAction.addTopicBitByBit({
            clickedTab:clickedTab,
            value:value
        }))
    }
}

export const addDifficultyHandler=(value)=>{
    return async(dispatch)=>{
        dispatch(quizModificationAction.addDifficulty({
            difficulty: value
        }))
    }
}

export const addItemTotalHandler=(value)=>{
   return async(dispatch)=>{
    dispatch( 
        quizModificationAction.addItemTotal({
        itemTotal:value
    }))
   }
}

export const addTimerHandler=(value)=>{

    return async(dispatch)=>{
        dispatch(quizModificationAction.addTimer({
            timer:value
        }))
    }
    
}


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


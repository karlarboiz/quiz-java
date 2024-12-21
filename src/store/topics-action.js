import { topisAction } from ".";

export const addTopicsHandler=(state)=>{
    
    return async(dispatch)=>{
        dispatch(topisAction.addTopics({
            topics:state
        }))
    }
}
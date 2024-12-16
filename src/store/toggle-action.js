import { toggleAction } from ".";

export const toggleSwitchHandler=(state)=>{
    
    return async(dispatch)=>{
        dispatch(toggleAction.toggleSwitch({
            toggled:state
        }))
    }
}
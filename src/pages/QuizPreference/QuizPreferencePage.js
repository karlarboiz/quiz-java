import { useSelector } from "react-redux";
import QuizPreference from "./QuizPreference";

const QuizPreferencePage = ()=>{
    const auth = useSelector(state => state.auth);  
    return(
        <QuizPreference/>
    )
}

export default QuizPreferencePage;
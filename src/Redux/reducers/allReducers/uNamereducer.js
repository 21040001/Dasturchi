import * as actionType from "../../actions/actionTypes"
import  initialStates from "../initialStates";

export default function uNameReducer(state=initialStates.user_username.uname,action){
    switch (action.type) {
        case actionType.USER_USERNAME:
            return {
                ...state , uname : action.payload
            }
         
        default:
            return state ;
    }
}
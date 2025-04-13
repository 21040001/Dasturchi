import * as actionType from "../../actions/actionTypes"
import  initialStates from "../initialStates";

export default function userEmailReducer(state=initialStates.user_email.email,action){
    switch (action.type) {
        case actionType.USER_EMAIL:
            return {
                ...state , email : action.payload
            }
         
        default:
            return state ;
    }
}
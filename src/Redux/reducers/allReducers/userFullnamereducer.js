import * as actionType from "../../actions/actionTypes"
import  initialStates from "../initialStates";

export default function userFullnameReducer(state=initialStates.user_fullname.fullname,action){
    switch (action.type) {
        case actionType.USER_FULLNAME:
            return {
                ...state , fullname : action.payload
            }
         
        default:
            return state ;
    }
}
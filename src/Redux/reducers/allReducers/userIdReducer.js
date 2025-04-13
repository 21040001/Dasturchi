import * as actionType from "../../actions/actionTypes"
import  initialStates from "../initialStates";

export default function userIdReducer(state=initialStates.user_id.uid,action){
    switch (action.type) {
        case actionType.USER_ID:
            return {
                ...state , uid : action.payload
            }
         
        default:
            return state ;
    }
}
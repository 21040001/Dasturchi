import * as actionType from "../../actions/actionTypes"
import  initialStates from "../initialStates";

export default function userPasswordReducer(state=initialStates.user_password.password,action){
    switch (action.type) {
        case actionType.USER_PASSWORD:
            return {
                ...state , password : action.payload
            }
         
        default:
            return state ;
    }
}
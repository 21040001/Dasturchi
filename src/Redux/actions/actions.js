import * as actionTypes from "./actionTypes"
import initialStates from "../reducers/initialStates"

export function isSignIn(value){
    return{
        type: actionTypes.IS_SIGN_IN,
        payload: value
    }
}

export function user_fullname(fullName){
    return{
        type: actionTypes.USER_FULLNAME,
        payload : fullName
    }
}

export function user_email(email){
    return{
        type: actionTypes.USER_EMAIL,
        payload : email
    }
}
export function user_password(password){
    return{
        type: actionTypes.USER_PASSWORD,
        payload : password
    }
}

export function username_action(uName){
    return{
        type : actionTypes.USER_USERNAME,
        payload: uName
    }
}
export function userId(value){
    return{
        type : actionTypes.USER_ID,
        payload: value
    }
} 
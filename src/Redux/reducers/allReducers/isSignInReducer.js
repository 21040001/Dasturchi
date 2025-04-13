import * as actionType from '../../actions/actionTypes'
import initialStates from '../initialStates';

export default function isSignInReducer(state=initialStates.isSignIn.value, action) {
    switch (action.type) {
        case actionType.IS_SIGN_IN:
            return (action.payload)
         
        default:
            return state ;
    }
}

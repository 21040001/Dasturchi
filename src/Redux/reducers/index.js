import { combineReducers } from "redux";
import isSignInReducer from "./allReducers/isSignInReducer";
import userEmailReducer from "./allReducers/userEmailReducer";
import userFullnameReducer from "./allReducers/userFullnamereducer";
import userPasswordReducer from "./allReducers/userPasswordReducer";
import uNameReducer from "./allReducers/uNamereducer";
import userIdReducer from "./allReducers/userIdReducer";
const rootReducer = combineReducers({
    uNameReducer,
    userEmailReducer,
    userFullnameReducer,
    userIdReducer,
    userPasswordReducer,
    isSignInReducer
})
export default rootReducer;
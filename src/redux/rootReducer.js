import {combineReducers} from "redux";
import {reducer as userReducer} from "./user/redux";
import {reducer as appReducer} from "./app/redux";
import {reducer as dataReducer} from "./app/redux";

const rootReducer = combineReducers({
    user : userReducer,
    app : appReducer,
    data : dataReducer,
})

export default rootReducer;
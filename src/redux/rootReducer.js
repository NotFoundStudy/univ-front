import { combineReducers } from "redux";
import { reducer as userReducer } from "./user/redux";
import { reducer as appReducer } from "./app/redux";
import { reducer as dataReducer } from "./app/redux";

const rootReducer = combineReducers({
  user: userReducer, // login data
  app: appReducer, // common app data (ex. openSideBar)
  data: dataReducer, // about data
});

export default rootReducer;

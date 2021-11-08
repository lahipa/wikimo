import { combineReducers } from "redux";
// import { LOGOUT_SUCCESS } from "../actions/users/actionTypes";

import rdcmovies from "./movies";
import loading from "./loading";
import error from "./error";

const appReducer = combineReducers({
  /* top-level reducers */
  rdcmovies,
  loading,
  error,
});

const rootReducer = (state: any, action: any) => {
  // if (action.type === LOGOUT_SUCCESS) {
  //   state = undefined;
  // }

  // Persist
  // if (action.type === SIGNOUT_REQUEST) {
  //   // for all keys defined in your persistConfig(s)
  //   storage.removeItem("persist:root");
  //   // storage.removeItem('persist:otherKey')

  //   state = undefined;
  // }

  return appReducer(state, action);
};

export default rootReducer;

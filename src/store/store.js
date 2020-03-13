import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { authenticateUser, fetchUserData } from "./reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  authentication: authenticateUser,
  data: fetchUserData
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)));

export default store;
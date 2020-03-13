import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { authenticateUser, fetchUserData } from "./reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  authentication: authenticateUser,
  data: fetchUserData
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;
import { combineReducers } from 'redux';
import { types } from './actions';

const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} = types;

const authenticationState = {
  isAuthenticated: false,
  user: null
};

const dataState = {
  isFetching: false,
  data: null
};

export function authenticateUser(state = authenticationState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      console.log("This is the log of user login attempts:");
      console.log(action);
      return {
        isLoading: true
      };
    case LOGIN_SUCCESS:
      console.log("This is the log of user login successes:");
      console.log(action);
      return {
        isAuthenticated: true,
        user: action.user
      };
    case LOGIN_FAILURE:
      console.log("This is the log of login failures:");
      console.log(action);
      return {
        error: action.err
      };
    case LOGOUT:
      return {};
    default:
      return state;
  }
}

export function fetchUserData(state=dataState, action) {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      console.log("This is the log of data fetch attempts:");
      console.log(action);
      return {
        isLoadingData: true
      };
    case FETCH_DATA_SUCCESS:
      console.log("This is the log of data fetch successes:");
      console.log(action);
      return {
        isFetching: true,
        data: action.userData
      };
    case FETCH_DATA_FAILURE:
      console.log("This is the log of data fetch failures:");
      console.log(action);
      return {
        error: action.err
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  authenticateUser,
  fetchUserData
});

export default rootReducer;
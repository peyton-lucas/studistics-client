import { API, Auth } from "aws-amplify";
// Action Types
export const types = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',

  LOGOUT: 'LOGOUT',

  FETCH_DATA_REQUEST: 'FETCH_DATA_REQUEST',
  FETCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS',
  FETCH_DATA_FAILURE: 'FETCH_DATA_FAILURE'
}

//Action Creators
export function login(email, password) {
  console.log(email, password);
  return async function(dispatch) {
    dispatch({ type:types.LOGIN_REQUEST, email });
    await Auth.signIn(email, password)
    .then( user => {
      console.log(user);
      dispatch({ type:types.LOGIN_SUCCESS, user });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type:types.LOGIN_FAILURE, err });
      dispatch(alert(err));
    });
  }
}

export function logout() {
  const user = Auth.signOut();
  return {
    type: types.LOGOUT,
    user
  }
}

export function userDataFetch(identityId) {
  console.log("identityId: ");
  console.log(identityId);
  return async function(dispatch) {
    dispatch({ type:types.FETCH_DATA_REQUEST, identityId });
    return API.get("farms", `/farms/${ identityId }`)
      .then( userData => {
        dispatch({ type:types.FETCH_DATA_SUCCESS, userData });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type:types.FETCH_DATA_FAILURE, err });
        dispatch(alert(err));
      });
  };
}
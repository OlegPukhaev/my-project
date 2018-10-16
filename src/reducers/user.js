// import { auth } from './../utilites/auth';

// const IS_USER_LOGIN = 'IS_USER_LOGIN';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const GET_CURRENT_USER_INFO = 'GET_CURRENT_USER_INFO';

let initialState = {
  id:"U10000",
  email:null,
  password:null,
  loggedIn:false,
  data:{},
};

export function getCurrentUserInfo(email, password) {
  // console.log("Данные для всей фигни :",value);
  return dispatch => {
    dispatch({
      type: GET_CURRENT_USER_INFO, 
      email,
      password,
    });
  };
}

export function setCurrentUser(value, loggedIn) {
  return dispatch => {
    dispatch({
      type: SET_CURRENT_USER, 
      loggedIn: loggedIn,
      payload: value
    });
  };
}

const actionsMap = {
	[SET_CURRENT_USER]: (state, action) => {
    return {...state,
      loggedIn:action.loggedIn,
      data: action.payload
    }
	},
	[GET_CURRENT_USER_INFO]: (state, action) => {
    return {
      ...state,
      email: action.email,
      password: action.password
    }
	}
};

export default function user(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
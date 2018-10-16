import { auth } from './../utilites/auth';

// const IS_USER_LOGIN = 'IS_USER_LOGIN';
export const USER_FETCH_REQUESTED = 'USER_FETCH_REQUESTED';
export const GET_CURRENT_USER_INFO = 'GET_CURRENT_USER_INFO';

let initialState = {
  id:"U10000",
  loggedIn:false,
  user:{},
};

export function getCurrentUserInfo(id) {
  // console.log("Данные для всей фигни :",value);
  return dispatch => {
    dispatch({
      type: GET_CURRENT_USER_INFO, 
      id:id
    });
  };
}

export function userFetchRequest(value) {
  console.log("Данные для всей фигни :",value);
  return dispatch => {
    dispatch({
      type: USER_FETCH_REQUESTED, 
      loggedIn: true,
      payload: value
    });
  };
}

const actionsMap = {
	[USER_FETCH_REQUESTED]: (state, action) => {
    return {...state,
      loggedIn:action.loggedIn,
      user: action.payload
    }
	},
	[GET_CURRENT_USER_INFO]: (state, action) => {
    return {
      ...state,
      id: action.id
    }
	}
};

export default function user(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
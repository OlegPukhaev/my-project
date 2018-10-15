import { auth } from './../utilites/auth';

const IS_USER_LOGIN = 'IS_USER_LOGIN';
const USER_FETCH_REQUESTED = 'USER_FETCH_REQUESTED';

let initialState = {
  loggedIn:false,
  user:{}
};

export function userFetchRequest(value) {
  console.log("Данные :",value);
  return dispatch => {
    dispatch({
      type: USER_FETCH_REQUESTED, 
      payload: value
    });
  };
}

const actionsMap = {
	[USER_FETCH_REQUESTED]: (state, action) => {
    return {...state,
      isUserLogin: action.payload
    }
	}
};

export default function user(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
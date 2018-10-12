const IS_USER_LOGIN = 'IS_USER_LOGIN';

let initialState = {
  loggedIn:false,
  user:{}
};

export function setUserStatus(value) {
    return dispatch => {
      dispatch({
		type: IS_USER_LOGIN, 
    payload: value
      });
    };
  }

const actionsMap = {
	[IS_USER_LOGIN]: (state, action) => {
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
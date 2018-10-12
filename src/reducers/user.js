const USER = 'USER';

let initialState = {};

export function setUserStatus(value) {
    return dispatch => {
      dispatch({
		type: USER, 
    payload: value
      });
    };
  }

const actionsMap = {
	[USER]: (state, action) => {
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
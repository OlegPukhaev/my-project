import { take, put, call } from 'redux-saga/effects';
import { fetchUserLogin, fetchValidateToken } from './../utility/auth';

import {
  GET_CURRENT_USER_INFO,
  GET_VALIDATE_TOKEN,
  setCurrentUser
} from './../reducers/user';

 
export function* currentUserSaga () {
  const { email, password } = yield take(GET_CURRENT_USER_INFO);
  const response = yield call(fetchUserLogin, email, password);
  console.log("Response",response);
  yield put(setCurrentUser(response, true));
}

export function* validateToken () {
  yield take(GET_VALIDATE_TOKEN);
  const response = yield call(fetchValidateToken);
  console.log("Validate Token", response);
  yield put(setCurrentUser(response, true));
}

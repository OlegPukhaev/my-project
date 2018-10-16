import { take, put, call, apply } from 'redux-saga/effects';
import { fetchUserLogin } from './../utility/auth';

import {
  GET_CURRENT_USER_INFO,
  setCurrentUser
} from './../reducers/user';

 
export function* currentUserSaga () {
  const { email, password } = yield take(GET_CURRENT_USER_INFO);
  const response = yield call(fetchUserLogin, email, password);
  console.log("Response",response);
  yield put(setCurrentUser(response, true));
}
import { take, put, call, apply } from 'redux-saga/effects';
import { fetchUserLogin } from './../utility/auth';

import {
  GET_CURRENT_USER_INFO,
  setCurrentUser
} from './../reducers/user';

 
export function* currentUserSaga () {
  const { email, password } = yield take(GET_CURRENT_USER_INFO);
  const response = yield call(fetchUserLogin);
  console.log("Response",response);

  // const data = yield apply(response, JSON.response);

  console.info("email/password :", email,"/", password);
  // console.log("Data?", data);
}
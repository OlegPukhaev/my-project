// import { delay } from 'redux-saga';
import { take, put, call, apply } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import {
  GET_CURRENT_USER_INFO,
  setCurrentUser
} from './../reducers/user';

 
export function* currentUserSaga () {
  const { id } = yield take(GET_CURRENT_USER_INFO);
  console.info("ID", id);
}
import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
// import Api from '...'

// Сага: её вызов произойдет тогда, когда сработает USER_FETCH_REQUESTED action
function* fetchUser(action) {
   try {
      // const user = yield call(Api.fetchUser, action.payload.userId);
      // yield put({type: "USER_FETCH_SUCCEEDED", user: "Oleg"});
      alert("ffff");
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
  console.log("fasfsd");
}

/*
  Начинается вызов fetchUser на каждый `USER_FETCH_REQUESTED` action.
  takeEvery - позволяет параллельное выполнение запросов, если новый action пришел до выполнения саги от предыдущего
*/
function* mySaga() {
  console.log("before yield");
  yield* takeEvery("USER_FETCH_REQUESTED", fetchUser);
  console.log("after yield");
}

/*
  Есть альтернатива: использовать takeLatest.

  takeLatest - не позволяет параллельного выпольнения запроса. Если пришел новый action
  в то время как сага от предыдущего находится в состоянии ожидания ответа от сервера,
  то она будет отменена и будет получена только самая актуальная информация(от последнего запроса)
*/
// function* mySaga() {
//   yield* takeLatest("USER_FETCH_REQUESTED", fetchUser);
// }

export default mySaga;
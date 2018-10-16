import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReduser from './rootReducer';

import createSagaMiddleware from 'redux-saga';
import { initSagas } from './initSagas';
// import mySaga from './../utilites/sagas';

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  rootReduser, 
  applyMiddleware(thunk, sagaMiddleware), 
  );
console.info("Saga MiddleWare implemented");
initSagas(sagaMiddleware);
// sagaMiddleware.run(mySaga);
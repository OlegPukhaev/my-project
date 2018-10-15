import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import thunk from 'redux-thunk';
import rootReduser from './rootReducer';
import mySaga from './../utilites/sagas';
// создаем сагу - middleware
const sagaMiddleware = createSagaMiddleware();


export default createStore(rootReduser, applyMiddleware(thunk),applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);
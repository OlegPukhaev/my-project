import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReduser from './rootReducer';

export default createStore(rootReduser, applyMiddleware(thunk));
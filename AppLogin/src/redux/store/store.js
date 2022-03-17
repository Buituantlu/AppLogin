import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootSagas from "../saga/index";
import rootReducers from '../reducers/index';

const sagaMiddleware = createSagaMiddleware();
let store;
if (__DEV__) {
  store = createStore(rootReducers, applyMiddleware(sagaMiddleware));
} 
sagaMiddleware.run(rootSagas);
export default store;
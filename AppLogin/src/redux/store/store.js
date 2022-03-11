import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import {AuthReducers} from '../reducer/reducer';
import rootSaga from "../saga/rootSaga";
const sagaMiddleware = createSagaMiddleware();
const rootReducers = combineReducers({
    AuthReducers,
});

const store = createStore(rootReducers, applyMiddleware(thunk, sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;
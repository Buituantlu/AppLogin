import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AuthReducers from './reducer';
const rootReducers = combineReducers({
    AuthReducers,
});

export const store = createStore(rootReducers, applyMiddleware(thunk));
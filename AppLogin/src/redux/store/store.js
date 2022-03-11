import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AuthReducers from '../reducer/reducer';
const rootReducers = combineReducers({
    AuthReducers,
});


const store = createStore(rootReducers, applyMiddleware(thunk));
export default store;
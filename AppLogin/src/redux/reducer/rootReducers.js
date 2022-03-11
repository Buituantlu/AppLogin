import { combineReducers } from "redux";
import { AuthReducers, GetApiReducers} from './reducer';

const rootReducers = combineReducers({
    AuthReducers,
    GetApiReducers,
});

export default rootReducers;
import {combineReducers} from 'redux';
import loginReducers from '../../screens/SignIn/reducer/index';
import getUserReducers from '../../screens/Account/reducer/index';

const rootReducers = combineReducers({
  loginReducers,
  getUserReducers,
});

export default rootReducers;

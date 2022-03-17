import {fork} from 'redux-saga/effects';
import { watchGetUser } from '../../screens/Account/saga/GetUserSaga';
import {watchLoginUser} from '../../screens/SignIn/saga/LoginSaga';

export default function* rootSagas() {
  yield fork(watchLoginUser);
  yield fork(watchGetUser);
}

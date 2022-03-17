import {Api} from './Api';
import {AbstractSagaApi} from '../../../networks/api/AbstractSagaApi';
import {LOGIN, LOGIN_FAILED, LOGIN_SUCCEEDED} from '../action/ActionType';
import {takeLatest} from 'redux-saga/effects';
import {SUCCESS_CODE} from '../../../utils/Constants';

export function* loginAction(action) {
  const response = yield Api.login(action.params);
  yield AbstractSagaApi(
    action,
    response,
    LOGIN_SUCCEEDED,
    LOGIN_FAILED,
    SUCCESS_CODE,
  );
}

export function* watchLoginUser() {
  yield takeLatest(LOGIN, loginAction);
}

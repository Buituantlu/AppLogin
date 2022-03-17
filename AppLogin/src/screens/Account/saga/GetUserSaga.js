import {Api} from './Api';
import {AbstractSagaApi} from '../../../networks/api/AbstractSagaApi';
import {
    GET_USER,
    GET_USER_SUCCEEDED,
    GET_USER_FAILED,
} from '../action/ActionTipe';
import {takeLatest} from 'redux-saga/effects';
import {SUCCESS_CODE} from '../../../utils/Constants';

export function* getUserAction(action) {
  const response = yield Api.getUser(action.params);
  yield AbstractSagaApi(
    action,
    response,
    GET_USER_SUCCEEDED,
    GET_USER_FAILED,
    SUCCESS_CODE,
  );
}

export function* watchGetUser() {
  yield takeLatest(GET_USER, getUserAction);
}

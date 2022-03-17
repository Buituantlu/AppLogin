import {put} from 'redux-saga/effects';
import strings from '../../utils/Strings';
import {SUCCESS_CODE} from '../../utils/Constants';
import {ERROR_NETWORK} from './ActionNetwork';

export function* AbstractSagaApi(
  action,
  response,
  typeSuccess,
  typeError,
  statusSuccess,
) {
  let successValue = statusSuccess === undefined || statusSuccess === null
      ? SUCCESS_CODE
      : statusSuccess;
  try {
    if (
      response === strings.networkError ||
      response === strings.timeOutMessage ||
      response === strings.internalServerErrorMsg
    ) {
      if (response === strings.networkError) {
        action.onError(strings.msg_networkError);
      } else {
        action.onError(response);
      }
      yield put({type: ERROR_NETWORK, response: response});
    } else if (response.status === successValue) {
      action.onSuccess(response, action.type);
      yield put({type: typeSuccess, response});
    } else {
      action.onError(response, action.type);
      yield put({type: typeError, response});
    }
  } catch (e) {
    const responseError = {
      message: e.message,
      code: e.code,
    };
    yield put({type: typeError, response: responseError});
  }
}

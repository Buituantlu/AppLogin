import { call, put } from 'redux-saga/effects';
import UserActions from '@redux/UserRedux';
import NavigationService from '@services/NavigationService';
import AsyncStorage from "@react-native-community/async-storage";
import { log } from '@common';

export function* loginUser(api, action) {
  const { email, password } = action;
  const response = yield call(api.login, ...[email, password]);
  // success?
  // && !response.data.error
  if (response.ok) {
    log(response.data);
    yield call(() =>
      AsyncStorage.setItem('access_token', response.data.access_token)
    );
    yield put(UserActions.userSuccess(response.data));
    NavigationService.navigate('Home', {});
  } else {
    yield put(UserActions.userFailure(response.data));
  }
}
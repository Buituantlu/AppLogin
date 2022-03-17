import {LOGIN, LOG_OUT} from './ActionType';
import { AsyncStorage } from '@react-native-community/async-storage';

export const actionLogin = (params, onSuccess, onError) => ({
  type: LOGIN,
  params,
  onSuccess,
  onError,
});



import {LOGIN} from './ActionType';

export const actionLogin = (params, onSuccess, onError) => ({
  type: LOGIN,
  params,
  onSuccess,
  onError,
});



import {GET_USER} from './ActionType';

export const actionGetUser = (params, onSuccess, onError) => ({
  type: GET_USER,
  params,
  onSuccess,
  onError,
});


import {GET_USER} from './ActionTipe';

export const actionGetUser = (onSuccess, onError) => ({
  type: GET_USER,
  onSuccess,
  onError,
});


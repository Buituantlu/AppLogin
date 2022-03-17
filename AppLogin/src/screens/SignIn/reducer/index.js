import {
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCEEDED,
  LOG_OUT,
} from '../action/ActionType';
import {ERROR_NETWORK} from '../../../networks/api/ActionNetwork';
import {combineReducers} from 'redux';

const initialState = {
  items: {},
  isLoading: false,
  error: false,
  authToken: null,
};

const loginReducer = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoading: true,
        error: false,
        authToken: action.payload,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: true,
        items: action.response,
      };
    case LOGIN_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        error: false,
        items: action.response,
      };
    case ERROR_NETWORK:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};

const loginReducers = combineReducers({
  loginReducer,
});

export default loginReducers;

import {
    GET_USER,
    GET_USER_SUCCEEDED,
    GET_USER_FAILED,
  } from '../action/ActionTipe';
  import {ERROR_NETWORK} from '../../../networks/api/ActionNetwork';
  import {combineReducers} from 'redux';

  const initialState = {
    items: {},
    isLoading: false,
    error: false,
  };
  
  const getUserReducer = (state, action) => {
    if (typeof state === 'undefined') {
      return initialState;
    }
    switch (action.type) {
      case GET_USER:
        return {
          ...state,
          isLoading: true,
          error: false,
        };
      case GET_USER_FAILED:
        return {
          ...state,
          isLoading: false,
          error: true,
          items: action.response,
        };
      case GET_USER_SUCCEEDED:
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
  
  const getUserReducers = combineReducers({
    getUserReducer,
  });
  
  export default getUserReducers;
  
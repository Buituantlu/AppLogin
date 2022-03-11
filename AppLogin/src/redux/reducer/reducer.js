
import { REQUEST_API_POST, REQUEST_API_POST_SUCCESS, LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE } from '../action/consAction';
const initialState = {
  authToken: null,
  refreshToken: '',
  accessToken: '',
  isLoading: false,
  error: '',
}

export const AuthReducers = (state = initialState, action) => {
  console.log(`LoginReducer type: ${action.type} with payload: ${action.payload}`);
  switch (action.type) {
    case LOGIN: 
      return {
        ...state,
        authToken: action.payload,
      }
    case LOGOUT: 
      return {
        authToken: null,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        refreshToken: payload.access_token,
        accessToken: payload.refresh_token,
        isLoading: false,
        error: '',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: 'Login fail',
      };
    default: 
      return state;
  }
}

export const GetApiReducers = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_API_POST:
      return {
        ...state,
      }
    case REQUEST_API_POST_SUCCESS:
      return {
        ...state,
        users: payload.users
      }
    default:
      return state;
  }
};

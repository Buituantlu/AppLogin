
import { REQUEST_API_POST, REQUEST_API_POST_SUCCESS, LOGIN, LOGOUT } from '../action/consAction';
const initialState = {
  authToken: null,
  users: [],
}

const AuthReducers = (state = initialState, action) => {
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
}
export default AuthReducers;
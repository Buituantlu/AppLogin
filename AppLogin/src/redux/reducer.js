
const initialState = {
  authToken: 123,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN': 
      return {
        ...state,
        authToken: action.payload,
      }
    case 'LOGOUT': 
      return {
        authToken: null,
      }
    default: 
      return state;
  }
}
// export default AuthReducers;
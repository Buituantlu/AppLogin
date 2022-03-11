import AsyncStorage from "@react-native-community/async-storage";
import { LOGIN, LOGOUT, REQUEST_API_DATA, REQUEST_API_DATA_SUCCESS } from "./consAction";

export const Init = () => {
  return async dispatch => {
    let token = await AsyncStorage.getItem('token');
    if(token !== null) {
      dispatch({
        type: LOGIN,
        payload: token,
      })
    }
  }  
}

export const Login = (username, password) => {
  return async dispatch => {
    let token = null
    if(username === 'Abc' && password == '123') {
      token = username+password;
      await AsyncStorage.setItem('token', token);
    } else{
      alert('User have not account')
    }
    dispatch({
      type: LOGIN,
      payload: token,
    })
  }  
}

export const Logout = () => {
    return async dispatch => {
      await AsyncStorage.clear();
      dispatch({
          type: LOGOUT,
      })
    }
}
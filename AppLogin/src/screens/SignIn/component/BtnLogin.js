import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { actionLogin } from '../action/LoginAction';
import { storeData } from '../../../utils/AsyncStorage';
import { AsyncStorage } from '@react-native-community/async-storage';

const BtnLogin = ({values}) => {
  const dispatch = useDispatch();
  const LoginSignIn = () => {
    const params = {
      email: `${values.email}`,
      password: `${values.password}`,
    }
    dispatch(actionLogin(params, onSuccess, onError));
  };
  const onSuccess = async (response) => {
    const token = response.data.token;
    await storeData(`accessToken`, `${token}`)
    alert('Login Success')
  }
  const onError = (error) => {
    console.log('Login error: ', error)
  }
  return (
    <TouchableOpacity onPress={LoginSignIn} style={styles.btnSignIn}>
      <Text style={styles.txtButton}>Sign In</Text>
    </TouchableOpacity>
  );
};

export default memo(BtnLogin);

const styles = StyleSheet.create({
    btnSignIn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CD5C5C',
        height: 50,
        borderRadius: 10,
    },
    txtButton: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: '700',
    },
});

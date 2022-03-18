import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { actionLogin } from '../action/LoginAction';
import { storeData } from '../../../utils/AsyncStorage';
import { useNavigation } from '@react-navigation/native';
import { HOME_STACK } from '../../../navigation/ScreenName';
import Colors from '../../../utils/Colors';
import strings from '../../../utils/Strings';

const BtnLogin = ({values}) => {
  const navigation = useNavigation()
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
    navigation.navigate(HOME_STACK)
  }
  const onError = (error) => {
    console.log('Login error: ', error)
    alert(strings.loginFailed)
  }
  return (
    <TouchableOpacity onPress={LoginSignIn} style={styles.btnSignIn}>
      <Text style={styles.txtButton}>{strings.SignIn}</Text>
    </TouchableOpacity>
  );
};

export default memo(BtnLogin);

const styles = StyleSheet.create({
    btnSignIn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.minRed,
        height: 50,
        borderRadius: 10,
    },
    txtButton: {
        color: Colors.white,
        fontSize: 17,
        fontWeight: '700',
    },
});

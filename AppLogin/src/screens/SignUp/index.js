import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../../utils/Colors';
import { SignInScreen } from '../../navigation/ScreenName';
import strings from '../../utils/Strings';

const SignUp = ({navigation}) => {
  const Continue = () => {
    navigation.navigate(SignInScreen);
  }

  const LoginSignIn = () => {
    navigation.navigate(SignInScreen);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{strings.SignUp}</Text>
        <View style={styles.email}>
          <Text style={styles.txtEmail}>{strings.Email}</Text>
          <TextInput placeholder="Your email address" />
        </View>
        <View style={styles.password}>
          <Text style={styles.txtPassword}>{strings.Password}</Text>
          <TextInput />
        </View>
        <TouchableOpacity
          onPress={Continue}
          style={styles.button}>
          <Text style={styles.txtButton}>{strings.Continue}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.txtFooter}>{strings.Account}</Text>
        <TouchableOpacity
          onPress={LoginSignIn}>
          <Text style={styles.txtSignIn}>{strings.SignIn}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: Colors.white,
  },
  header: {
    flex: 1, 
    marginHorizontal: 55, 
    marginTop: 80
  },
  title: {
    fontSize: 34, 
    fontWeight: '500', 
    marginBottom: 50
  },
  email: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray,
    marginBottom: 40,
  },
  txtEmail: {
    color: Colors.red,
    fontSize: 16,
    fontWeight: '700',
    paddingBottom: 15,
  },
  password: {
    borderBottomWidth: 1,
    borderBottomColor:Colors.gray,
    marginBottom: 30,
  },
  txtPassword: {
    color: Colors.red,
    fontSize: 16,
    fontWeight: '700',
    paddingBottom: 15,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CD5C5C',
    height: 50,
    borderRadius: 10,
  },
  txtButton: {
    color: Colors.white, 
    fontSize: 17, 
    fontWeight: '700'
  },
  footer: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'center'
  },
  txtFooter: {
    color: Colors.gray,
    fontSize: 16,
    fontWeight: '700',
    marginRight: 8,
  },
  txtSignIn: {
    color: Colors.red, 
    fontSize: 16, 
    fontWeight: '700'
  },
});

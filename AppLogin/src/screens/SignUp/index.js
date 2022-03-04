import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sign Up</Text>
        <View style={styles.email}>
          <Text style={styles.txtEmail}>Email</Text>
          <TextInput placeholder="Your email address" />
        </View>
        <View style={styles.password}>
          <Text style={styles.txtPassword}>Password</Text>
          <TextInput />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Main');
          }}
          style={styles.button}>
          <Text style={styles.txtButton}>Continue</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.txtFooter}>Have an Account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignIn');
          }}>
          <Text style={styles.txtSignIn}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFF'
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
    borderBottomColor: '#C0C0C0',
    marginBottom: 40,
  },
  txtEmail: {
    color: '#FF0000',
    fontSize: 16,
    fontWeight: '700',
    paddingBottom: 15,
  },
  password: {
    borderBottomWidth: 1,
    borderBottomColor: '#C0C0C0',
    marginBottom: 30,
  },
  txtPassword: {
    color: '#FF0000',
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
    color: '#FFF', 
    fontSize: 17, 
    fontWeight: '700'
  },
  footer: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'center'
  },
  txtFooter: {
    color: '#C0C0C0',
    fontSize: 16,
    fontWeight: '700',
    marginRight: 8,
  },
  txtSignIn: {
    color: '#FF0000', 
    fontSize: 16, 
    fontWeight: '700'
  },
});

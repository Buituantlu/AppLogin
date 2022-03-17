import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import InputAuth from '../../common/component/InputAuth';
import { HOME_STACK } from '../../navigation/ScreenName';

const SignIn = ({navigation}) => {

  const LoginSignUp = () => {
    navigation.navigate(HOME_STACK)
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/icons/cloud.png')}
          style={styles.imgHeader}
        />
        <Text style={styles.txtHeader}>Company Name</Text>
      </View>
      <KeyboardAvoidingView behavior="padding" style={styles.content}>
        <Text style={styles.txtContent}>Sign In</Text>
        <Text style={styles.txtDes}>Hi there! Nice to see you again.</Text>
        <InputAuth navigation={navigation}/>
      </KeyboardAvoidingView>
      <TouchableOpacity
        style={styles.btnFooter}
        onPress={LoginSignUp}>
        <Text style={styles.txtFooter}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flex: 1,
    marginTop: 80,
    alignItems: 'center',
  },
  imgHeader: {
    height: 120,
    width: 120,
  },
  txtHeader: {
    fontSize: 16,
    fontWeight: '700',
    color: '#C0C0C0',
  },
  content: {
    flex: 2,
    marginHorizontal: 55,
  },
  txtContent: {
    fontSize: 34,
    fontWeight: '500',
    marginBottom: 20,
  },
  txtDes: {
    color: '#808080',
    fontSize: 16,
    marginBottom: 30,
  },
  btnFooter: {
    marginBottom: 75,
  },
  txtFooter: {
    color: '#FF0000',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
});

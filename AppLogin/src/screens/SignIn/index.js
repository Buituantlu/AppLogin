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
import { useNavigation } from '@react-navigation/native';
import {SignUpScreen } from '../../navigation/ScreenName';
import Colors from '../../utils/Colors';
import strings from '../../utils/Strings';
import Images from '../../utils/Images';

const SignIn = () => {
  const navigation = useNavigation()
  const LoginSignUp = () => {
    navigation.navigate(SignUpScreen)
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={Images.cloud}
          style={styles.imgHeader}
        />
        <Text style={styles.txtHeader}>{strings.CompanyName}</Text>
      </View>
      <KeyboardAvoidingView behavior="padding" style={styles.content}>
        <Text style={styles.txtContent}>{strings.SignIn}</Text>
        <Text style={styles.txtDes}>{strings.Hi}</Text>
        <InputAuth navigation={navigation}/>
      </KeyboardAvoidingView>
      <TouchableOpacity
        style={styles.btnFooter}
        onPress={LoginSignUp}>
        <Text style={styles.txtFooter}>{strings.SignUp}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
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
    color: Colors.gray,
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
    color: Colors.gray,
    fontSize: 16,
    marginBottom: 30,
  },
  btnFooter: {
    marginBottom: 75,
  },
  txtFooter: {
    color: Colors.red,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
});

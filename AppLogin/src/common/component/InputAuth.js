import React from 'react';
import {Formik} from 'formik';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import * as Yup from 'yup';
import {SafeAreaView} from 'react-native-safe-area-context';
import { HOME_STACK } from '../../navigation/ScreenName';
import BtnLogin from '../../screens/SignIn/component/BtnLogin';
import Colors from '../../utils/Colors';
import strings from '../../utils/Strings';
import Images from '../../utils/Images';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email!')
    .required('Email is required!'),
  password: Yup.string()
    .trim()
    .min(8, 'Password is too short!')
    .required('Email is required!'),
});
function InputAuth({navigation}) {
  const userInfo = {
    email: '',
    password: '',
  };
  const [isSecureEntry, setIsSecureEntry] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
  const HideAndShowPassword = () => {
    setVisible(!visible);
    setIsSecureEntry(!isSecureEntry);
  };
  // const LoginSignIn = () => {
  //   navigation.navigate(HOME_STACK)
  // }
  return (
    <Formik 
      initialValues={userInfo} 
      validationSchema={validationSchema}>
      {({values, errors, touched, handleBlur, handleChange, handleSubmit}) => {
        const {email, password} = values;
        return (
          <SafeAreaView>
            <View style={styles.email}>
              <Text style={styles.txtEmail}>{strings.Email}</Text>
              <TextInput
                value={email}
                onBlur={handleBlur('email')}
                onChangeText={handleChange('email')}
                style={styles.inputEmail}
              />
              {errors.email && touched.email ? <Text>
                {errors.email}
              </Text> : null}
            </View>
            <View style={styles.password}>
              <Text style={styles.txtPassword}>{strings.Password}</Text>
              <View style={styles.eye}>
                <TextInput
                  value={password}
                  onBlur={handleBlur('password')}
                  onChangeText={handleChange('password')}
                  secureTextEntry={visible}
                  style={styles.inputPass}
                />
                <TouchableOpacity 
                  onPress={HideAndShowPassword} 
                  style={styles.btnEye}>
                  <Image
                    source={Images.eye}
                    style={styles.imgEye}
                  />
                </TouchableOpacity>
              </View>
              {errors.password && touched.password ? <Text>
                {errors.password}
              </Text> : null}
            </View>
            <BtnLogin values={values} />
          </SafeAreaView>
        );
      }}
    </Formik>
  );
}

export default InputAuth;

const styles = StyleSheet.create({
  email: {
    marginBottom: 20,
  },
  inputEmail: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray,
    marginBottom: 5,
  },
  txtEmail: {
    color: Colors.red,
    fontSize: 16,
    fontWeight: '700',
    paddingBottom: 15,
  },
  password: {
    marginBottom: 30,
  },
  txtPassword: {
    color: Colors.red,
    fontSize: 16,
    fontWeight: '700',
    paddingBottom: 15,
  },
  eye: {
    flexDirection: 'row',
  },
  inputPass: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray,
    marginBottom: 5,
  },
  imgEye: {
    height: 25,
    width: 25,
  },
  btnEye: {
    flexDirection: 'column', 
    justifyContent: 'center', 
    paddingBottom: 10,
  },
});
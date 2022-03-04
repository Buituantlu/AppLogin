import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';

const SignIn = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isSecureEntry, setIsSecureEntry] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const LoginSignUp = () => {
    navigation.navigate('SignUp');
  }

  const LoginSignIn = () => {
    if (data == []) {
      setLoading(false);
    } else if (email == 'ABC' && password == 123) {
      navigation.navigate('Main');
    } else {
      alert('Login False');
    }
  }

  const HideAndShowPassword = () => {
    setVisible(!visible);
    setIsSecureEntry(!isSecureEntry);
  }

  useEffect(() => {
    axios
      .get('https://reqres.in/api/users/')
      .then(({data}) => {
        setData(data.data);
      })
      .catch(error => console.error(error));
  }, [setData]);
  
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
        <View style={styles.email}>
          <Text style={styles.txtEmail}>Email</Text>
          <TextInput value={email} onChangeText={e => setEmail(e)} />
        </View>
        <View style={styles.password}>
          <Text style={styles.txtPassword}>Password</Text>
          <View style={styles.eye}>
            <TextInput
              value={password}
              onChangeText={e => setPassword(e)}
              secureTextEntry={visible}
              style={styles.inputPass}
            />
            <TouchableOpacity
              onPress={HideAndShowPassword}>
              <Image
                source={require('../../assets/icons/eye.png')}
                style={styles.imgEye}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={LoginSignIn}
          style={styles.btnSignIn}>
          <Text style={styles.txtButton}>Sign In</Text>
        </TouchableOpacity>
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
  email: {
    borderBottomWidth: 1,
    borderBottomColor: '#C0C0C0',
    marginBottom: 20,
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
  eye: {
    flexDirection: 'row',
  },
  inputPass: {
    flex: 1,
  },
  imgEye: {
    height: 25,
    width: 25,
  },
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

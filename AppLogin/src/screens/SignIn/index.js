import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView} from 'react-native';
import React from 'react';

const SignIn = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isSecureEntry, setIsSecureEntry] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={{flex: 1, marginTop: 80, alignItems: 'center'}}>
        <Image source={require('../../assets/icons/cloud.png')} style={{height: 120, width: 120 }} />
        <Text style={{fontSize: 16, fontWeight: '700', color: '#C0C0C0'}}>Company Name</Text>
      </View>
      <KeyboardAvoidingView behavior='padding' style={{flex: 2, marginHorizontal: 55}}>
        <Text style={{fontSize: 34, fontWeight: '500', marginBottom: 20}}>Sign In</Text>
        <Text style={{color: '#808080', fontSize: 16, marginBottom: 30}}>Hi there! Nice to see you again.</Text>
        <View style={{borderBottomWidth: 1, borderBottomColor: '#C0C0C0', marginBottom: 20}}>
          <Text style={{color: '#FF0000', fontSize: 16, fontWeight: '700', paddingBottom: 15}}>Email</Text>
          <TextInput value={email} onChangeText={e => setEmail(e)} />
        </View>
        <View style={{borderBottomWidth: 1, borderBottomColor: '#C0C0C0', marginBottom: 30}}>
          <Text style={{color: '#FF0000', fontSize: 16, fontWeight: '700', paddingBottom: 15}}>Password</Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              value={password} 
              onChangeText={e => setPassword(e)}
              secureTextEntry={visible} 
              style={{flex: 1}}
            />
            <TouchableOpacity onPress={() => {
                  setVisible(!visible)
                  setIsSecureEntry(!isSecureEntry)
                }}>
              <Image source={require('../../assets/icons/eye.png')} style={{height: 25, width: 25, tintColor: isSecureEntry ? '#C0C0C0' : '#000' }} />
            </TouchableOpacity>
          </View>
        </View>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Main')
      }} style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#CD5C5C', height: 50, borderRadius: 10}}>
        <Text style={{color: '#FFF', fontSize: 17, fontWeight: '700'}}>Sign In</Text>
      </TouchableOpacity>
      </KeyboardAvoidingView>
      <TouchableOpacity style={{marginBottom: 75}} onPress={() => {
        navigation.navigate('SignUp')
      }}>
        <Text style={{color: '#FF0000', fontSize: 16, fontWeight: '700', textAlign: 'center'}}>Sign Up</Text>  
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});

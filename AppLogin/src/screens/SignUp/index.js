import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const SignUp = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={{flex: 1, marginHorizontal: 55, marginTop: 80}}>
        <Text style={{fontSize: 34, fontWeight: '500', marginBottom: 50}}>
          Sign Up
        </Text>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#C0C0C0',
            marginBottom: 40,
          }}>
          <Text
            style={{
              color: '#FF0000',
              fontSize: 16,
              fontWeight: '700',
              paddingBottom: 15,
            }}>
            Email
          </Text>
          <TextInput placeholder="Your email address" />
        </View>
        <View style={{borderBottomWidth: 1, borderBottomColor: '#C0C0C0', marginBottom: 30}}>
          <Text
            style={{
              color: '#FF0000',
              fontSize: 16,
              fontWeight: '700',
              paddingBottom: 15,
            }}>
            Password
          </Text>
          <TextInput />
        </View>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#CD5C5C',
            height: 50,
            borderRadius: 10,
          }}>
          <Text style={{color: '#FFF', fontSize: 17, fontWeight: '700'}}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1,flexDirection: 'row', justifyContent: 'center'}}>
        <Text
          style={{
            color: '#C0C0C0',
            fontSize: 16,
            fontWeight: '700',
            marginRight: 8,
          }}>
          Have an Account?
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignIn');
          }}>
          <Text style={{color: '#FF0000', fontSize: 16, fontWeight: '700'}}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});

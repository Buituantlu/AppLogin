import React from 'react';
import Authentication from './Authentication';
import Home from './HomeStack';
import {navigationRef} from '../common/NavigationService';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import _ from 'lodash';

const getToken = async () =>  {
 const initToken = await AsyncStorage.getItem('accessToken');
 return initToken
}

function RootStack() {
  const [AccessToken, setAccessToken] = React.useState('')
  let accessToken = null 
  getToken().then(token => {
    accessToken = token
    setAccessToken(accessToken)
  })
  console.log(AccessToken)
  return (
    <NavigationContainer ref={navigationRef}>
        {_.isEmpty(AccessToken)? <Authentication /> : <Home />}
    </NavigationContainer>
  );
}

export default RootStack;

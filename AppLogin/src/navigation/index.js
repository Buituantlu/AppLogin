import React from 'react';
import { View, StyleSheet } from 'react-native';
import Authentication from './Authentication';
import Home from './HomeStack';
import {navigationRef} from '../common/NavigationService';
import {NavigationContainer} from '@react-navigation/native';
import _ from 'lodash';
import {ActivityIndicator} from 'react-native-paper';
import { AUTH_STACK, HOME_STACK } from './ScreenName';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getData } from '../utils/AsyncStorage';
import Colors from '../utils/Colors';

const Stack = createNativeStackNavigator();
function RootStack() {
  const [loading, setLoading] = React.useState(false);
  const [AccessToken, setAccessToken] = React.useState('');
  const getToken = async () => {
    const initToken = await getData('accessToken');
    return initToken;
  };

  if (!_.isEmpty(AccessToken)) {
    getToken().then(token => {
      let accessToken = token;
      setAccessToken(accessToken);
      setLoading(false)
    }).catch(err => console.log(err))
  }

  console.log(AccessToken);
  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color={Colors.black} />
      </View>
    );
  }
  const toAuth = () => {
    navigation.navigate(AUTH_STACK);
  }
  const toHome = () => {
    navigation.navigate(HOME_STACK);
  }
  React.useEffect(()=> {
    {_.isEmpty(AccessToken) ? toAuth : toHome }
  },[])
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>  
        <Stack.Screen
          name={AUTH_STACK}
          component={Authentication}
          options={{headerShown: false}}
        />
        <Stack.Screen name={HOME_STACK} component={Home} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;

const styles = StyleSheet.create({
  loading: {
    flex: 1, 
    justifyContent: 'center'
  }
})
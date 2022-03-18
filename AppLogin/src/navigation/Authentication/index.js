import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../../screens/SignIn/index';
import SignUp from '../../screens/SignUp/index';
import { SignInScreen, SignUpScreen } from '../ScreenName';

const AuthStack = createNativeStackNavigator();

function Authentication() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={SignInScreen}
        component={SignIn}
        options={{headerShown: false}}
      />
      <AuthStack.Screen name={SignUpScreen} component={SignUp} />
    </AuthStack.Navigator>
  );
}
export default Authentication;

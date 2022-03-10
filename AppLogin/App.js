import * as React from 'react';
import {
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './src/navigation/Authentication/SignIn';
import SignUp from './src/navigation/Authentication/SignUp';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './src/redux/store'
import Home from './src/navigation/Home/index';
import { Init } from './src/redux/action';
import { ActivityIndicator } from 'react-native-paper';

const AuthStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

const Authentication = () => {
  return (
        <AuthStack.Navigator>
          <AuthStack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
          <AuthStack.Screen name="SignUp" component={SignUp} />
        </AuthStack.Navigator>
  );
}

const RootStack = () => {
  const [loading, setLoading] = React.useState(true);
  const token = useSelector(state => state.AuthReducers.authToken)

  const dispatch = useDispatch();
  const init = async () => {
    await dispatch(Init());
    setLoading(false);
  }
  React.useEffect(() => {
    init();
  }, [])

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size='large' color='#000' />
      </View>
    )
  }
  return (
    <NavigationContainer>
      {token === null ? 
        <Authentication /> : <Home />
      }
    </NavigationContainer>
  )
}

const App = () => {
  return (
    <Provider store={store} >
      <RootStack />
    </Provider>
  );
}

export default App;
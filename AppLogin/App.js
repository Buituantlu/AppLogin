import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import Main from './src/screens/Main/index';
import Personal from './src/screens/Personal/index';
import { Provider } from 'react-redux';
import { store } from './src/redux/store'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store} >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Main" component={Main} options={{headerShown: false}} />
          <Stack.Screen name="Personal" component={Personal} options={{headerTitle: '', headerBackTitleVisible: false, headerShadowVisible: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
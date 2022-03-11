import * as React from 'react';
import {
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './src/redux/store/store'
import Home from './src/navigation/HomeStack/index';
import Authentication from './src/navigation/Authentication/index';
import { Init } from './src/redux/action/action';
import { ActivityIndicator } from 'react-native-paper';

const Stack = createNativeStackNavigator();

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
      {!token ? 
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
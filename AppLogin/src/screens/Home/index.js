import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Account from '../Account/index';
import Profile from '../Profile/index';

const Drawer = createDrawerNavigator();

const Home = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 240,
        },
      }}
    >
      <Drawer.Screen name="Account" component={Account} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

export default Home;

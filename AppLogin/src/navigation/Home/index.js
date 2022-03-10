import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './Profile/index';
import Account from './Account/index';
import Personal from './Personal/index';

const Drawer = createDrawerNavigator();

const Home = () => {
  return (
      <Drawer.Navigator drawerContent={props => <Profile {...props} />}>
        <Drawer.Screen name="Account" component={Account} options={{headerShown: false}} />
        <Drawer.Screen name="Personal" component={Personal} options={{headerShown: false}} />
      </Drawer.Navigator>
  );
}

export default Home
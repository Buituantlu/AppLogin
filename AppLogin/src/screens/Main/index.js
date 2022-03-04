import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../../navigation/Profile/index';
import Account from '../../navigation/Account/index';

const Drawer = createDrawerNavigator();

const Main = () => {
  return (
      <Drawer.Navigator drawerContent={props => <Profile {...props} />}>
        <Drawer.Screen name="Account" component={Account} options={{headerShown: false}} />
      </Drawer.Navigator>
  );
}

export default Main
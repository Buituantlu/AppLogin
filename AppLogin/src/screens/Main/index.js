import * as React from 'react';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import Profile from '../Profile/index';
import Account from '../Account/index';

const Drawer = createDrawerNavigator();

function Home({ navigation }) {
  return (
    <Drawer.Section style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <DrawerItem label='Open' onPress={() => navigation.toggleDrawer()} />
    </Drawer.Section>
  );
}

const Main = () => {
  return (
      <Drawer.Navigator drawerContent={props => <Profile {...props} />}>
        <Drawer.Screen name="Account" component={Account} options={{headerShown: false}} />
      </Drawer.Navigator>
  );
}

export default Main
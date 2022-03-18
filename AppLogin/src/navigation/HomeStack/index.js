import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../../screens/Profile/index';
import Account from '../../screens/Account/index';
import Personal from '../../screens/Personal/index';
import { AccountScreen, PersonalScreen } from '../ScreenName';

const Drawer = createDrawerNavigator();
const header = {
  headerTitle: ''
}
const headerShown = {
  headerShown: false
}

function Home() {
  return (
      <Drawer.Navigator screenOptions={header} drawerContent={props => <Profile {...props} />}>
        <Drawer.Screen name={AccountScreen} component={Account}/>
        <Drawer.Screen name={PersonalScreen} component={Personal} options={headerShown}/>
      </Drawer.Navigator>
  );
}

export default React.memo(Home)
import React, {memo} from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Text} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';
import ItemDrawer from './ItemDrawer';
import {storeData} from '../../utils/AsyncStorage';
import {useNavigation} from '@react-navigation/native';
import {AUTH_STACK} from '../../navigation/ScreenName';
import {useSelector} from 'react-redux';
import _ from 'lodash';
import Colors from '../../utils/Colors';
import strings from '../../utils/Strings';

const Profile = props => {
  const navigation = useNavigation();

  const user = useSelector(
    state => state.getUserReducers.getUserReducer.users[0],
  );

  const logout = async () => {
    await storeData('accessToken', '');
    navigation.navigate(AUTH_STACK);
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <Drawer.Section style={styles.infoUser}>
          <ItemDrawer user={user} />
        </Drawer.Section>
        <Drawer.Section style={styles.content}>
          <TouchableOpacity onPress={logout} style={styles.txtBtnLeft}>
            <Text style={styles.txtBtnHeader}>{strings.Logout}</Text>
          </TouchableOpacity>
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
};
export default memo(Profile);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: Colors.white,
    alignItems: 'center',
    marginTop: 40
  },
  content: {
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: Colors.minRed,
  },
  infoUser: {
    marginTop: 20,
    borderRadius: 15,
  },
  txtBtnHeader: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

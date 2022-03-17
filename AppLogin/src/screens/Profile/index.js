import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';
import ItemDrawer from './ItemDrawer';
import { getData } from '../../utils/AsyncStorage';
import _ from 'lodash';
import { useNavigation } from '@react-navigation/native';

const Profile = (props) => {
  const CloseDrawer = () => props.navigation.closeDrawer();
  const navigation = useNavigation();
  const [user, setUser] = React.useState([])
  const getUser = async () =>  {
    const info = await getData('InfoUser');
    return info;
  }
  if(_.isEmpty(user)){
    let users = null 
    getUser().then(token => {
    users = token
    setUser(users)
  })}

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <TouchableOpacity onPress={CloseDrawer}>
          <Image
            source={require('../../assets/icons/X.png')}
            style={styles.header}
          />
        </TouchableOpacity>
        <Drawer.Section style={styles.content}>
          <TouchableOpacity
            style={styles.btnContent}
            onPress={() => {
              navigation.navigate('Account')
            }}>
            <ItemDrawer user={user} />
          </TouchableOpacity>
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
};
export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: '#FFF',
  },
  header: {
    tintColor: '#FF0000',
  },
  content: {
    alignItems: 'center',
  },
  btnContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
  },
});

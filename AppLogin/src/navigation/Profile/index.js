import React, {useEffect} from 'react';
import axios from 'axios';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';
import ItemDrawer from './ItemDrawer';

const Profile = props => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    axios
      .get('https://reqres.in/api/users/')
      .then(({data}) => {
        setData(data.data);
      })
      .catch(error => console.error(error));
  }, [setData]);
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Image
            source={require('../../assets/icons/X.png')}
            style={styles.header}
          />
        </TouchableOpacity>
        <Drawer.Section style={styles.content}>
          <TouchableOpacity
            style={styles.btnContent}
            onPress={() => {
              props.navigation.closeDrawer();
            }}>
            <ItemDrawer user={data} />
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

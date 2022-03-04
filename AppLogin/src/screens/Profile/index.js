import React, { useEffect } from 'react';
import axios from 'axios';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';
import ItemDrawer from './ItemDrawer';

const Profile = (props, {navigation, user}) => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    axios.get('https://reqres.in/api/users/')
      .then(({data}) => {
        setData(data.data)
      })
      .catch((error) => console.error(error))
  }, [setData]);
  return (
    <View style={{flex: 1, paddingHorizontal: 25, backgroundColor: '#FFF'}}>
      <DrawerContentScrollView {...props}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Image
            source={require('../../assets/icons/X.png')}
            style={{tintColor: '#FF0000'}}
          />
        </TouchableOpacity>
        <Drawer.Section style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 50}}
            onPress={() => {
              props.navigation.closeDrawer()}}>
            <ItemDrawer user={data}/>
          </TouchableOpacity>
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});

import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Avatar, Title, Caption, Drawer} from 'react-native-paper';

const Profile = (props, {navigation}) => {
  return (
    <View style={{flex: 1, paddingHorizontal: 25, backgroundColor: '#FFF'}}>
      <DrawerContentScrollView {...props}>
        <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
          <Image source={require('../../assets/icons/X.png')} style={{tintColor: '#FF0000'}}/>
        </TouchableOpacity>
        <Drawer.Section style={{alignItems: 'center'}}>
          <Avatar.Image source={require('../../assets/imgs/avatar.jpeg')} />
          <View style={{marginTop: 15, alignItems: 'center'}}>
            <Title >Bùi Văn Tuân</Title>
            <Caption>tuanbv@runsystem.net</Caption>
          </View>
          <TouchableOpacity
            style ={{flexDirection: 'row', alignItems: 'center', marginTop: 50}}
            onPress={() => {
              props.navigation.navigate('Account');
            }}>
            <Image source={require('../../assets/icons/home.png')} style={{height: 30, width: 30, marginRight: 15}}/>
            <Text style={{fontSize: 20, flex: 1}}>Home</Text>
            <Image
              source={require('../../assets/icons/right.png')}
              style={{tintColor: '#C0C0C0'}}
            />
          </TouchableOpacity>
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});

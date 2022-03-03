import {StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import ItemAccount from './ItemAccount';

const Account = (props, {navigation}) => {
  return (
    <ScrollView style={{flex: 1, marginTop: 50, paddingHorizontal: 20, backgroundColor: '#FFF'}}>
      <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
        <Image source={require('../../assets/icons/more.png')} />
      </TouchableOpacity>
      <ItemAccount navigation={props.navigation}/>
      <ItemAccount navigation={props.navigation}/>
      <ItemAccount navigation={props.navigation}/>
      <ItemAccount navigation={props.navigation}/>
      <ItemAccount navigation={props.navigation}/>
      <ItemAccount navigation={props.navigation}/>
      <ItemAccount navigation={props.navigation}/>
      <ItemAccount navigation={props.navigation}/>
    </ScrollView>
  );
};

export default Account;

const styles = StyleSheet.create({});

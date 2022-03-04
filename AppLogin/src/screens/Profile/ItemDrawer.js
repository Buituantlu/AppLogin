import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ItemDrawer = ({user}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={{uri: user[0]?.avatar}}
        style={{width: 88, height: 88, borderRadius: 64, marginRight: 15}}
      />
      <View style={{marginTop: 15, alignItems: 'center'}}>
        <Text style={{color: '#000', fontSize: 20}}>
          {`${user[0]?.first_name} ${user[0]?.last_name}`}
        </Text>
        <Text style={{color: '#000', fontSize: 18}}>{`${user[0]?.email}`}</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center',marginTop: 20}}>
        <Image
            source={require('../../assets/icons/home.png')}
            style={{height: 30, width: 30, marginRight: 15}}
        />
        <Text style={{fontSize: 20, flex: 1}}>Home</Text>
        <Image
            source={require('../../assets/icons/right.png')}
            style={{tintColor: '#C0C0C0'}}
        />
      </View>
    </View>
  );
};

export default ItemDrawer;

const styles = StyleSheet.create({});

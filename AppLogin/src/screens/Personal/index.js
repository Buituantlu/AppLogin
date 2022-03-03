import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Title, Caption} from 'react-native-paper';

const Personal = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFF', alignItems: 'center'}}>
      <Image style={{marginTop: 50, height: 150, width: 150, borderRadius: 100}} source={require('../../assets/imgs/avatar.jpeg')} />
      <View style={{marginTop: 15, alignItems: 'center'}}>
        <Title style={{fontWeight: '700'}}>Bùi Văn Tuân</Title>
        <Caption style={{fontSize: 18}}>tuanbv@runsystem.net</Caption>
      </View>
    </View>
  );
};

export default Personal;

const styles = StyleSheet.create({});

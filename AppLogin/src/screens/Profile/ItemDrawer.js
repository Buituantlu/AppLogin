import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ItemDrawer = ({user}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: user[0]?.avatar}} style={styles.imgAvatar} />
      <View style={styles.name}>
        <Text style={styles.txtNameUser}>
          {`${user[0]?.first_name} ${user[0]?.last_name}`}
        </Text>
        <Text style={styles.txtEmail}>{`${user[0]?.email}`}</Text>
      </View>
      <View style={styles.itemDraw}>
        <Image
          source={require('../../assets/icons/home.png')}
          style={styles.imgDraw}
        />
        <Text style={styles.txtDraw}>Home</Text>
        <Image
          source={require('../../assets/icons/right.png')}
          style={styles.imgRight}
        />
      </View>
    </View>
  );
};

export default ItemDrawer;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  imgAvatar: {
    width: 88, 
    height: 88, 
    borderRadius: 64, 
    marginRight: 15
  },
  name: {
    marginTop: 15, 
    alignItems: 'center'
  },
  txtNameUser: {
    color: '#000', 
    fontSize: 20
  },
  txtEmail: {
    color: '#000', 
    fontSize: 18
  },
  itemDraw: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 20
  },
  imgDraw: {
    height: 30, 
    width: 30, 
    marginRight: 15
  },
  txtDraw: {
    fontSize: 20, 
    flex: 1
  },
  imgRight: {
    tintColor: '#C0C0C0'
  },
});

import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const ItemAccount = ({user}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: user.avatar}} style={styles.imgAvatar} />
      <View style={styles.name}>
        <Text style={styles.txtName}>
          {`${user.first_name} ${user.last_name}`}
        </Text>
        <Text style={styles.txtEmail}>{`${user.email}`}</Text>
      </View>
      <Image source={require('../../assets/icons/right.png')} />
    </View>
  );
};

export default ItemAccount;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 20
  },
  imgAvatar: {
    width: 88, 
    height: 88, 
    borderRadius: 64, 
    marginRight: 15
  },
  name: {
    flex: 1
  },
  txtName: {
    color: '#000', 
    fontSize: 20
  },
  txtEmail: {
    color: '#000', 
    fontSize: 18
  },
});

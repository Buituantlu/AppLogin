import {Image, StyleSheet, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import {Title, Caption} from 'react-native-paper';
import axios from 'axios';

const Personal = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://reqres.in/api/users/')
      .then(({data}) => {
        setData(data.data);
      })
      .catch(error => console.error('Err in call api',error))
  }, [setData]);
  return (
    <View style={styles.container}>
      <Image style={styles.imgAvatar} source={{uri: data[0]?.avatar}} />
      <View style={styles.nameUser}>
        <Title style={styles.txtUser}>{`${data[0]?.first_name} ${data[0]?.last_name}`}</Title>
        <Caption style={styles.txtDes}>{`${data[0]?.email}`}</Caption>
      </View>
    </View>
  );
};

export default Personal;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFF', 
    alignItems: 'center'
  },
  imgAvatar: {
    marginTop: 50, 
    height: 150, 
    width: 150, 
    borderRadius: 100
  },
  nameUser: {
    marginTop: 15, 
    alignItems: 'center'
  },
  txtUser: {
    fontWeight: '700'
  },
  txtDes: {
    fontSize: 18
  },
});

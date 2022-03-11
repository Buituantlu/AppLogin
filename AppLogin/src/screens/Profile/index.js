import React, {useEffect, Component} from 'react';
import axios from 'axios';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Drawer} from 'react-native-paper';
import ItemDrawer from './ItemDrawer';
import { REQUEST_API_DATA } from '../../redux/action/consAction';
import { getData } from '../../api/axiosClient';
import { connect } from 'react-redux';

const Profile = props => {
  const [data, setData] = React.useState([]);

  const CloseDrawer = () => props.navigation.closeDrawer();

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
        <TouchableOpacity onPress={CloseDrawer}>
          <Image
            source={require('../../assets/icons/X.png')}
            style={styles.header}
          />
        </TouchableOpacity>
        <Drawer.Section style={styles.content}>
          <TouchableOpacity
            style={styles.btnContent}
            onPress={CloseDrawer}>
            <ItemDrawer user={data} />
          </TouchableOpacity>
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users,
    error: state.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch({ type: REQUEST_API_DATA })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

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

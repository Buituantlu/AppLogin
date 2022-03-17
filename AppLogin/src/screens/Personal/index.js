import React from 'react';
import {Image, StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import {Title, Caption} from 'react-native-paper';
import {getData} from '../../utils/AsyncStorage';
import _ from 'lodash';

const Personal = () => {
  const [user, setUser] = React.useState([]);
  const [edit, setEdit] = React.useState('');
  const getUser = async () => {
    const info = await getData('InfoUser');
    return info;
  };
  if (_.isEmpty(user)) {
    let users = null;
    getUser().then(token => {
      users = token;
      setUser(users);
    });
  }
  const hideAndShow = true;
  const ViewInput = () => {
    return (
      <View style={{borderColor: '#000', borderWidth: 0.5, borderRadius: 10, flexDirection: 'row', width: 200, justifyContent: 'space-between'}} >
        <TextInput 
          value={edit} 
          onChangeText={(e)=> setEdit(e)} 
          placeholder='E.g: Lio'

          />
        <TouchableOpacity style={{marginLeft: 20,height: 30, width: 70, borderRadius: 10, backgroundColor: '#710', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 15, color: '#FFF', fontWeight: '700'}}>
            EDIT
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const HandleEdit = () => {
    
    console.log('asd');
  };
  return (
    <View style={styles.container}>
      <Image style={styles.imgAvatar} source={{uri: user.avatar}} />
      <View style={styles.nameUser}>
        <View style={styles.name}>
          <Title
            style={
              styles.txtUser
            }>{`${user.first_name} ${user.last_name}`}</Title>
          <TouchableOpacity onPress={HandleEdit}>
            <Image
              source={require('../../assets/icons/edit.png')}
              style={styles.iconEdit}
            />
          </TouchableOpacity>
        </View>
        {hideAndShow ? <ViewInput /> : null}
        <Caption style={styles.txtDes}>{`${user.email}`}</Caption>
      </View>
    </View>
  );
};

export default Personal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  imgAvatar: {
    marginTop: 50,
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  nameUser: {
    marginTop: 15,
    alignItems: 'center',
  },
  txtUser: {
    fontWeight: '700',
    marginRight: 5,
  },
  txtDes: {
    fontSize: 18,
  },
  name: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconEdit: {
    height: 20,
    width: 20,
  },
});

import React, { memo } from 'react';
import {Image, StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import {Title, Caption} from 'react-native-paper';
import { useSelector } from 'react-redux';
import _ from 'lodash'
import {strings} from '../../utils/Strings'
import { useNavigation } from '@react-navigation/native';
import Colors from '../../utils/Colors';
import Images from '../../utils/Images';

const Personal = ({route}) => {
  const [edit, setEdit] = React.useState('');
  const [hide, setHide] = React.useState(false);
  const navigation = useNavigation();
  const _index = route.params.index;
  
  const user = useSelector((state) => state.getUserReducers.getUserReducer.users[_index]);

  const handleEdit = () => {
    console.log('asas')
    setHide(!hide)
  };
  const editName = () => {
    console.log('abcas');
  };
  const goBack = () => {
    navigation.goBack();
  }
  
  const ViewInput = () => {
    return (
      <View style={styles.containerView} >
        <TextInput 
          value={edit} 
          onChangeText={(e)=> setEdit(e)} 
          placeholder='E.g: Lio'
          />
        <TouchableOpacity
          onPress={editName}
          style={styles.btnEdit}>
          <Text style={styles.txtEdit}>
            {strings.EDIT}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={goBack}
        style={styles.btnBack}>
        <Image source={Images.back} style={styles.imgBack} />
      </TouchableOpacity>
      <View style={{alignItems: 'center'}} >
        <Image style={styles.imgAvatar} source={{uri:user.avatar}} />
        <View style={styles.nameUser}>
          <View style={styles.name}>
            <Title
              style={
                styles.txtUser
              }>{`${user.first_name} ${user.last_name}`}</Title>
            <TouchableOpacity onPress={handleEdit}>
              <Image
                source={Images.edit}
                style={styles.iconEdit}
              />
            </TouchableOpacity>
          </View>
          {hide ? <ViewInput /> : null}
          <Caption style={styles.txtDes}>{`${user.email}`}</Caption>
        </View>
      </View>
    </View>
  );
};

export default memo(Personal);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  containerView: {
    borderColor: Colors.black, 
    borderWidth: 0.5, 
    borderRadius: 10, 
    flexDirection: 'row', 
    width: 200, 
    justifyContent: 'space-between'
  },
  btnEdit: {
    marginLeft: 20,
    height: 30, 
    width: 70, 
    borderRadius: 10, 
    backgroundColor: Colors.blue, 
    justifyContent: 'center', 
    alignItems: 'center'
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
  txtEdit: {
    fontSize: 15, 
    color: Colors.white, 
    fontWeight: '700'
  },
  btnBack: {
    marginLeft: 25, 
    marginTop: 50
  },
  imgBack: {
    height: 30, 
    width: 30, 
    tintColor: Colors.blue, 
  },
});

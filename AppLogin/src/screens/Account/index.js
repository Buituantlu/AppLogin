import axios from 'axios';
import React, {useState, useEffect} from 'react';
import ItemAccount from '../Account/ItemAccount';
import {useDispatch} from 'react-redux';
import {actionGetUser} from './action/GetUserAction';
import {StyleSheet, View, FlatList, TouchableOpacity, Text} from 'react-native';
import {storeData} from '../../utils/AsyncStorage'
import { AUTH_STACK } from '../../navigation/ScreenName';
import { useNavigation } from '@react-navigation/native';

const Account = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [indexSelect, setIndexSelect] = React.useState(() => {
    return 1;
  });
  const GetUser = () => {
    dispatch(actionGetUser(onSuccess, onError));
    setLoading(true);
  };
  const onSuccess = async(response) => {
    const dataUser = response.data.data
    setData([dataUser]);
    storeData('InfoUser', dataUser)
    setLoading(false)
  };

  const onError = error => {
    console.log('GetUser error: ', error);
  };
  const Logout = async() => {
    storeData('accessToken', '')
    navigation.navigate(AUTH_STACK)
  }
  const HandleItem = () => {
    if (!loading) {
      navigation.navigate('Personal');
      // setIndexSelect(data[indexSelect]?.id);
    } else {
      alert('error');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={HandleItem}>
              <ItemAccount
                user={item}
                isSelect={item.id === indexSelect}
                setIndexSelect={item.id}
              />
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.content}
        refreshing={loading}
        ListHeaderComponent={() => {
          return (
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity
                onPress={GetUser}
                style={styles.txtBtnLeft}>
                <Text
                  style={styles.txtBtnHeader}>
                  GET_USER
                </Text>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={Logout}
                style={styles.txtBtnLeft}>
                <Text style={styles.txtBtnHeader}>
                  LOG_OUT
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
  },
  txtBtnHeader: {
    color: '#fff', 
    fontSize: 20, 
    textAlign: 'center'
  },
  txtBtnLeft: {
    backgroundColor: '#710',
    borderRadius: 20,
    width: '35%',
  }
});

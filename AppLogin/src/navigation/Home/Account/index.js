import axios from 'axios';
import React, {useState, useEffect} from 'react';
import ItemAccount from '../Account/ItemAccount';
import { useDispatch } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Logout } from '../../../redux/action';

const Account = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [indexSelect, setIndexSelect] = React.useState(()=>{
    return 1
  });
  const HandleItem = () => {
    if(loading){
      navigation.navigate('Personal');
      setIndexSelect(data[indexSelect]?.id);
    } else {
      alert('error')
    }
  };

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(Logout())
  }
  const OpenDrawer = () => navigation.openDrawer();

  useEffect(() => {
    axios
      .get('https://reqres.in/api/users/')
      .then(({data}) => {
        setData(data.data);
        setLoading(true)
      })
      .catch(error => console.error('Err in call api', error));
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={HandleItem} >
              <ItemAccount user={item} isSelect={item.id === indexSelect} setIndexSelect={item.id} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.content}
        ListHeaderComponent={() => {
          return (
            <View style={styles.header} >
              <TouchableOpacity onPress={OpenDrawer}>
                <Image source={require('../../../assets/icons/more.png')} />
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.btnLogout}
                onPress={handleLogout} >
                <Text style={styles.txtLogout}>
                  Logout
                </Text>
              </TouchableOpacity>
            </View>

          );
        }}
        refreshing={loading}
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
  header: {
    flexDirection: 'row', 
    marginTop: 50, 
    alignItems: 'center', 
    justifyContent: 'space-between'
  },
  btnLogout: {
    height:35, 
    width:100, 
    borderRadius: 17, 
    backgroundColor: '#710710',
    justifyContent: 'center', 
    alignItems: 'center'
  },
  txtLogout: {
    color: '#FFF', 
    fontSize: 20
  },
});

import axios from 'axios';
import React, {useState, useEffect} from 'react';
import ItemAccount from '../Account/ItemAccount';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const Account = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
      axios.get('https://reqres.in/api/users/')
        .then(({ data }) => {
          setData(data.data)
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
  }, []);
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => navigation.openDrawer()} key={item.id}>
              <ItemAccount user={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(index) => {
          return index.toString();
        }}
        contentContainerStyle={{flex: 1,paddingHorizontal: 20 ,backgroundColor: '#FFF'}}
        ListHeaderComponent={() => {
          return (
            <TouchableOpacity style={{marginTop: 50}} onPress={() => navigation.toggleDrawer()}>
              <Image source={require('../../assets/icons/more.png')} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

export default Account;
const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});

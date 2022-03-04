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
            <TouchableOpacity style={styles.header} onPress={OpenDrawer}>
              <Image source={require('../../assets/icons/more.png')} />
            </TouchableOpacity>
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
    marginTop: 50,
  },
});

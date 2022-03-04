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

  useEffect(() => {
    axios
      .get('https://reqres.in/api/users/')
      .then(({data}) => {
        setData(data.data);
      })
      .catch(error => console.error('Err in call api', error));
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Personal')}
              key={item.id}>
              <ItemAccount user={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.content}
        ListHeaderComponent={() => {
          return (
            <TouchableOpacity
              style={styles.header}
              onPress={() => navigation.toggleDrawer()}>
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

import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../utils/Colors';
import Images from '../../utils/Images';
import { PersonalScreen } from '../../navigation/ScreenName';

const ItemAccount = ({user, isSelect ,setIndexSelect, index}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity 
      onPress={() => {
        navigation.navigate(PersonalScreen,{index});
        setIndexSelect(index);
      }}>
      <View style={styles.container}>
        <Image source={{uri: user.avatar}} style={styles.imgAvatar} />
        <View style={styles.name}>
          <Text style={styles.txtName}>
            {`${user.first_name} ${user.last_name}`}
          </Text>
          <Text style={styles.txtEmail}>{`${user.email}`}</Text>
        </View>
        <Image
          style={{tintColor: isSelect ? Colors.blue : Colors.black}}
          source={Images.right}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ItemAccount;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  imgAvatar: {
    width: 88,
    height: 88,
    borderRadius: 64,
    marginRight: 15,
  },
  name: {
    flex: 1,
  },
  txtName: {
    color: Colors.black,
    fontSize: 20,
  },
  txtEmail: {
    color: Colors.black,
    fontSize: 18,
  },
});

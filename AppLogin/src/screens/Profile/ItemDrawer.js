import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../utils/Colors';
import strings from '../../utils/Strings';
import Images from '../../utils/Images';
import { AccountScreen } from '../../navigation/ScreenName';

const ItemDrawer = ({user}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={{uri: user?.avatar}} style={styles.imgAvatar} />
      <View style={styles.name}>
        <Text style={styles.txtNameUser}>
          {user?.first_name} {user?.last_name}
        </Text>
        <Text style={styles.txtEmail}>{user?.email}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(AccountScreen);
        }}
        style={styles.itemDraw}>
        <Image
          source={Images.home}
          style={styles.imgDraw}
        />
        <Text style={styles.txtDraw}>{strings.Home}</Text>
        <Image
          source={Images.right}
          style={styles.imgRight}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ItemDrawer;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  imgAvatar: {
    width: 88, 
    height: 88, 
    borderRadius: 64, 
    marginRight: 15
  },
  name: {
    marginTop: 15, 
    alignItems: 'center'
  },
  txtNameUser: {
    color: Colors.black, 
    fontSize: 20
  },
  txtEmail: {
    color: Colors.black, 
    fontSize: 18
  },
  itemDraw: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 20,
  },
  imgDraw: {
    height: 30, 
    width: 30, 
    marginRight: 15
  },
  txtDraw: {
    fontSize: 20, 
    flex: 1
  },
  imgRight: {
    tintColor: Colors.gray,
  },
});

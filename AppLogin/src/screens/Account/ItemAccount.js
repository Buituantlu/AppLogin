import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ItemAccount = (props, {navigation}) => {
  return (
    <View style={{backgroundColor: '#FFF'}}>
      <TouchableOpacity
        style={{flexDirection: 'row', alignItems: 'center', marginTop: 50}}
        onPress={() => {
          props.navigation.navigate('Personal');
        }}>
        <Image
          source={require('../../assets/imgs/avatar.jpeg')}
          style={{height: 60, width: 60, borderRadius: 100, marginRight: 20}}
        />
        <View style={{flex: 1}}>
          <Text style={{fontSize: 18, flex: 1, fontWeight: '600'}}>Bùi Văn Tuân</Text>
          <Text style={{fontSize: 17, flex: 1}}>tuanbv@runsystem.net</Text>
        </View>
        <Image
          source={require('../../assets/icons/right.png')}
          style={{tintColor: '#C0C0C0'}}
        />
      </TouchableOpacity>
    </View>
  )
}

export default ItemAccount

const styles = StyleSheet.create({})
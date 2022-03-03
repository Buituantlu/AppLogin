import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ItemAccount = ({user}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center',paddingVertical: 20}}>
      <Image
        source={{uri: user.avatar}}
        style={{ width: 88, height: 88, borderRadius: 64, marginRight: 15}}
      />
      <View style={{flex: 1}} >
        <Text style={{color: "#000", fontSize: 20 }}>
            {`${user.first_name} ${user.last_name}`}
        </Text>
        <Text style={{color: '#000', fontSize: 18}}>
            {`${user.email}`}
        </Text>
      </View>
      <Image source={require('../../assets/icons/right.png')} />
    </View>
  )
}

export default ItemAccount

const styles = StyleSheet.create({})
import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Save Error ', e.message);
  }
};

export const getData = async key => {
  let value = '';
  try {
    value = await AsyncStorage.getItem(key);
  } catch (e) {
    console.error('Get Error ', e.getMessage());
  }
  return JSON.parse(value);
};
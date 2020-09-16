import AsyncStorage from "@react-native-community/async-storage";

export class StorageLib {
  static instance = new StorageLib();

  store = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value)
      return true;
    } 
    catch(err) {
      console.error('storage store err',err)
      return false;
    }
  }

  get = async (key) => {
    try {
      return await AsyncStorage.getItem(key)
    } 
    catch (error) {
      console.error('storage get err',err)
      throw Error(err)
    }
  }

  multiGet = async (keys) => {
    try {
      return await AsyncStorage.multiGet(keys)
    } 
    catch (error) {
      console.error('storage multiGet err',err)
      throw Error(err)
    }
  }

  getAllKeys = async () => {
    try {
      return await AsyncStorage.getAllKeys()
    } 
    catch (error) {
      console.error('storage allKeys err',err)
      throw Error(err)  
    }
  }

  remove = async (key) => {
    try {
      await AsyncStorage.removeItem(key)
      true
    } 
    catch (error) {
      console.error('storage remove err',err)
      false
    }
  }
}
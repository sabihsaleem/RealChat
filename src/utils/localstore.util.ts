import  AsyncStorage  from '@react-native-async-storage/async-storage';


const localStoreUtil = {
  store_data: async (key: string, data: any) => {
    await AsyncStorage.setItem(key, JSON.stringify(data));
    return true;
  },

  get_data: async (key: string) => {
    const item = await AsyncStorage.getItem(key);
    if (!item || item === undefined) return;

    return JSON.parse(item);
  },

  remove_data: async (key: string) => {
    await AsyncStorage.removeItem(key);
    return true;
  },

  remove_all: async () => {
    await AsyncStorage.clear();
    return true;
  },
};

export default localStoreUtil;

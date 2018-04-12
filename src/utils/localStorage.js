import {AsyncStorage} from 'react-native';

const LocalStorage = {
  get: key => {
    return AsyncStorage.getItem(key).then(value => {
      return JSON.parse(value);
    });
  },

  save: (key, value) => {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  },

  saveOnce: async (key, value) => {
    const getValue = await LocalStorage.get(key, value);
    if (!getValue) {
      return LocalStorage.save(key, value);
    }

    return false;
  },

  update: (key, value) => {
    return LocalStorage.delete(key).then(() => {
      LocalStorage.save(key, value);
    });
  },

  delete: key => {
    return AsyncStorage.removeItem(key);
  },

  reset: keys => {
    AsyncStorage.multiRemove(keys);
  },
};

export default LocalStorage;

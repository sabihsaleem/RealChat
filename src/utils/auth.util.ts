import localStore from './localstore.util';

export const getToken = () => localStore.get_data('token');

export const setToken = (token: any) => localStore.store_data('token', token);

export const getUser = () => localStore.get_data('user');

export const saveUser = (user: any) => localStore.store_data('user', user);

export const getDoctorInfo = () => localStore.get_data('doctor_info');

export const saveDoctorInfo = (user: any) =>
  localStore.store_data('doctor_info', user);

export const loginKey = () => localStore.store_data('isLogin', true);
export const getLoginKey = () => localStore.get_data('isLogin');

export const darkModeKey = () => localStore.store_data('isDarkMode', true);
export const getDarkModeKey = () => localStore.get_data('isDarkMode');

export const setStaticData = (data: any) =>
  localStore.store_data('static', data);

export const languageKey = (data: any) =>
  localStore.store_data('language', data);
export const getLanguageKey = () => localStore.get_data('language');

export const logout = async () => {
  localStore.remove_all();
  return true;
};

class Auth {
  user: {};
  constructor() {
    this.user = {};
  }

  async setUserFromLocal() {
    const user = await getToken();
    this.user = user ? user : {};
  }

  // set setUser(user) {
  //   this.user = user;
  // }

  // set loginKey(value) {
  //   this.value = value;
  // }

  get getUser() {
    return this.user;
  }

  async logout() {
    await logout();
    this.user = {};
  }
}

export const authClass = new Auth();

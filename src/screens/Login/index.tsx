/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  Alert,
} from 'react-native';
import {icons, images} from '../../assets';
import {CustomTextInput, CustomText, CustomButton} from '../../components';
import styles from './styles';
import {Colors} from '../../common';
import {Props} from '../../interfaces';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {WEB_CLIENT_ID} from '../../config';
import {setUser} from '../../redux/slices/auth-slice';
import {useDispatch} from 'react-redux';

GoogleSignin.configure({
  webClientId: WEB_CLIENT_ID,
});

const Login = ({navigation}: Props) => {
  const dispatch = useDispatch();

  const onLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signOut();
      const userInfo = await GoogleSignin.signIn();
      const {user} = userInfo;

      if (user) {
        const userData = {
          email: user?.email?.toLowerCase(),
          name: user?.name,
        };
        dispatch(setUser(userData));
        navigation?.navigate('Register');
      }
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // showToast('error', 'cancelled', 'Error!');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // showToast('error', 'play services not available or outdated', 'Error!');
      } else {
        // showToast('error', 'Something went wrong', 'Error!');
      }
    }
  };

  const imagesContainer = () => {
    return (
      <View style={styles.imagesContainer}>
        <Image source={images.logo} style={styles.logo} />
      </View>
    );
  };

  return (
    <View style={styles.main}>
      {imagesContainer()}
      <Text style={styles.header}>Login To Your Account</Text>
      <TouchableOpacity
        onPress={onLogin}
        style={[styles.socailIconBtn, styles.row]}>
        <Image source={icons.google} style={styles.socailIcon} />
        <Text style={styles.socailIconBtnText}>{'Google'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

/**
 * Misc. functions
 */
// language translation

import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';
import {
  Animated,
  Dimensions,
  PermissionsAndroid,
  PixelRatio,
} from 'react-native';
import {emailReg} from './globalRegex';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const {width, height} = Dimensions.get('window');
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const validateEmail = (email: string) => emailReg.test(email);

export const moveLR = (slideInLeft: Animated.Value | Animated.ValueXY) => {
  Animated.timing(slideInLeft, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  }).start();
};

export const toggleSlide = (
  slideInBottom: Animated.Value | Animated.ValueXY,
) => {
  Animated.spring(slideInBottom, {
    toValue: 0,
    velocity: 7,
    tension: 2,
    friction: 8,
    useNativeDriver: true,
  }).start();
};

export const widthPercentageToDP = (widthPercent: string | number) => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

export const heightPercentageToDP = (heightPercent: string | number) => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

export function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const resetNavigation = async (
  navigation: {dispatch: (arg0: CommonActions.Action) => void},
  screen: any,
  isClear = true,
) => {
  if (isClear) {
    let arr = await AsyncStorage.getAllKeys();
    await AsyncStorage.multiRemove(arr?.filter(item => item !== 'language'));
  }
  navigation.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{name: screen}],
    }),
  );
};

// first letter capitalize
export const capitalize = (str: string) =>
  str?.charAt(0).toUpperCase() + str?.slice(1);

// Check WHITE space
export const checkWhiteSpace = (text: string) => {
  const _text = text.trim();
  return text === _text;
};

export function scale(size: number) {
  return Math.floor((width / guidelineBaseWidth) * size);
}

export function verticalScale(size: number) {
  return Math.floor((height / guidelineBaseHeight) * size);
}

export function moderateScale(size: number, factor = 0.5) {
  return Math.floor(size + (scale(size) - size) * factor);
}

// get camera permissio for android
export const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'App Camera Permission',
        message: 'App needs access to your camera ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
};

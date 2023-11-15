import React from 'react';
import {View, TouchableOpacity, Platform, Text, StyleSheet} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import {Colors, FontSizes} from '@common';
import DeviceInfo from 'react-native-device-info';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

let hasNotch = DeviceInfo.hasNotch();

const CustomHeader = ({
  title = 'Home',
  leftIconColor = Colors.black,
  isLeftIcon = true,
  leftChild,
  onLeftClick,
  leftBtnDisabled = false,
  isRightIcon = true,
  rightChild,
  onRightClick,
  rightBtnDisabled,
  hasSafeArea = false,
  content = 'dark-content',
  bgColorAndroid = Colors.white,
}) => {
  return (
    <View
      style={[
        styles.header,
        {
          height: hasSafeArea ? (hasNotch ? 35 : 60) : hasNotch ? 90 : 60,
          paddingTop: hasSafeArea
            ? 0
            : hasNotch
            ? 30
            : Platform.OS === 'ios'
            ? 20
            : 0,
        },
      ]}>
      <TouchableOpacity
        disabled={leftBtnDisabled}
        style={styles.leftSide}
        onPress={onLeftClick}>
        {isLeftIcon ? (
          // <Icon name="chevron-back" size={30} color={leftIconColor} />
          <Text>ss</Text>
        ) : (
          leftChild
        )}
      </TouchableOpacity>
      <View style={styles.center}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity
        disabled={rightBtnDisabled}
        style={styles.rightSide}
        onPress={onRightClick}>
        {isRightIcon ? (
          // <Icon name="chevron-back" size={30} color={leftIconColor} />
          <Text>ss</Text>
        ) : (
          rightChild
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.White,
    shadowColor: Colors.Primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.4,
    elevation: 3,
  },
  container: {
    height: 50,
    justifyContent: 'center',
    shadowColor: Colors.Primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.4,
    elevation: 3,
    paddingHorizontal: wp('6%'),
    zIndex: 9999,
  },
  body: {
    flexDirection: 'row',
  },
  leftSide: {
    flex: 0.2,
    justifyContent: 'center',
  },
  Icon: {
    width: wp('4%'),
    height: wp('4%'),
    resizeMode: 'contain',
    tintColor: Colors.Primary,
  },
  middle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...FontSizes.ComicNeueMedium,
  },
  rightSide: {
    flex: 0.2,
    justifyContent: 'center',
  },
  leftBtn: {
    width: 28,
    height: 40,
    justifyContent: 'center',
  },
  rightBtn: {
    width: 28,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
});

import {Platform, StyleSheet} from 'react-native';
import {Colors, FontSizes, Fonts} from '../../common';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  main: {
    marginHorizontal: wp('7%'),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp('1.25%'),
    borderRadius: 10,
  },
  defaultStyle: {
    flex: 1,
    paddingVertical: Platform.OS === 'ios' ? hp('2%') : hp('1.5%'),
    paddingHorizontal: wp('5%'),
    borderRadius: 30,
    ...FontSizes.Regular,
  },
  defaultLeftStyle: {
    width: wp('8%'),
    height: wp('8%'),
    borderRadius: wp('8%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: wp('5%'),
  },
  defaultRigthStyle: {
    width: wp('8%'),
    height: wp('8%'),
    borderRadius: wp('8%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp('4%'),
  },
  sideIcon: {
    width: wp('4%'),
    height: wp('4%'),
    resizeMode: 'contain',
  },
  error: {
    marginVertical: wp('1%'),
  },
  errorText: {
    color: Colors.SilkenRuby,
  },
});

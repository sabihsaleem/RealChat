import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, FontSizes} from '../../common';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  img: {
    resizeMode: 'contain',
    marginBottom: wp('12%'),
    width: wp('100%'),
    height: hp('50%'),
    marginTop: wp('6%'),
  },
  slide1: {
    marginTop: wp('8%'),
    flex: 1,
    alignItems: 'center',
  },
  header: {
    ...FontSizes.ComicNeueMedium32,
    textAlign: 'center',
    width: wp('70%'),
  },
  title: {
    width: wp('60%'),
    ...FontSizes.Regular,
    textAlign: 'center',
    marginTop: wp('6%'),
    lineHeight: 20,
  },
});

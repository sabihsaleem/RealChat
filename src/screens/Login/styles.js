import {StyleSheet} from 'react-native';
import {Colors, FontSizes, Fonts} from '../../common';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  imagesContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: wp('15%')
  },
  logo: {
    resizeMode: 'contain',
    width: wp('50%'),
    height: hp('25%'),
  },
  header: {
    ...FontSizes.ComicNeueMediumXXMedium,
    textAlign: 'center',
  },
  contextText: {
    ...FontSizes.RegularRegular,
    textAlign: 'center',
    marginVertical: wp('2%')
  },
  row: {
    flexDirection: 'row',
  },
  socialContainer: {
    justifyContent: 'space-between',
    marginLeft: wp('7%'),
    marginRight: wp('7%'),
  },
  socailIconBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: wp('6%'),
    backgroundColor: Colors.Snow,
    width: wp('38.5%'),
    borderRadius: wp('4%'),
    borderWidth: 1,
    borderColor: Colors.White,
  },
  socailIcon: {
    width: wp('6.5%'),
    height: wp('6.5%'),
    resizeMode: 'cover',
    marginLeft: wp('3%'),
    marginRight: wp('3%'),
  },
  socailIconBtnText: {},
  forgotPasword: {},
});

import {StyleSheet} from 'react-native';
import {Colors, FontSizes, Fonts, shadows} from '../../common';
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
    marginVertical: wp('15%'),
  },
  logo: {
    resizeMode: 'contain',
    width: wp('50%'),
    height: hp('25%'),
  },
  header: {
    ...FontSizes.ComicNeueBoldH24,
    textAlign: 'center',
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
    height: hp('12%'),
    backgroundColor: Colors.Snow,
    width: wp('78%'),
    borderRadius: wp('4%'),
    borderWidth: 1,
    borderColor: Colors.Snow,
    ...shadows.shadow3,
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: hp('4%')
  },
  socailIcon: {
    width: wp('6.5%'),
    height: wp('6.5%'),
    resizeMode: 'contain',
    marginLeft: wp('3%'),
    marginRight: wp('3%'),
  },
  socailIconBtnText: {
    ...FontSizes.ComicNeueMediumH22
  },
});

import {StyleSheet} from 'react-native';
import {Colors, FontSizes, Fonts} from '../../common';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  linearGradient: {
    backgroundColor: Colors.Primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: hp('3%'),
    padding: wp('4.5%'),
    width: wp('35%'),
    alignSelf: 'center',
    borderRadius: wp('4%'),
  },
  btnNextText: {
    ...FontSizes.Labels,
    color: Colors.White,
  },
});

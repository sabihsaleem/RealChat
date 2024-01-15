import {StyleSheet} from 'react-native';
import {Colors, FontSizes, Fonts} from '../../common';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: wp('4.5%'),
    width: wp('35%'),
    alignSelf: 'center',
    borderRadius: wp('4%'),
  },
  btnNext:{
    marginTop: 'auto',
  },
  btnNextText: {
    ...FontSizes.Labels,
    color: Colors.White,
  },
});

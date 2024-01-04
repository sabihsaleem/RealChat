import {StyleSheet} from 'react-native';
import {Colors, FontSizes, Fonts} from '../../common';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  main: {
    flex: 1,
    marginHorizontal: wp('7%'),
  },
  box: {
    borderWidth: 1,
    paddingHorizontal: wp('5%'),
    paddingVertical: wp('3%'),
  },
  selector: {},
  themeModes: {},
  notifications: {},
  profile: {},
  privacyPolicy: {},
  tAndC: {},
});

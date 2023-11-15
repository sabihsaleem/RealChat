import {StyleSheet, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, FontSizes} from '../../../common';
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('4%'),
  },
  leftSide: {
    width: 40,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightSide: {
    width: 40,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...FontSizes.Title,
  },
});

export default styles;

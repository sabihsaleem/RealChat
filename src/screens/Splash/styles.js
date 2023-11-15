import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors} from '../../common';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.ErrieBlack
  },
  appLogoSize: {
    width: wp('65%'),
    height: wp('65%'),
    borderRadius: wp('65%'),
    resizeMode: 'contain',
  },
});

export default styles;

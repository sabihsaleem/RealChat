import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from './Colors';
import Fonts from './Fonts';

const bentonSansBold = hp('5.7%'); //48;
const bentonSansMedium = hp('5.2%'); //42;
const big = hp('4.01%'); //34;
const extralarge = hp('3.95%'); //32;
const large = hp('3%'); //24;
const xMedium = hp('2.7%'); //22;
const xxMedium = hp('2.4%'); //20
const medium = hp('2.15%'); //18;
const labels = hp('1.95%'); //16;
const body = hp('1.65%'); //14;
const regular = hp('1.46%'); //12;
const small = hp('1.3%'); //11;

const FontSizes = {
  /* fontSize */
  bentonSansBold,
  bentonSansMedium,
  big,
  extralarge,
  large,
  xMedium,
  xxMedium,
  medium,
  labels,
  body,
  regular,
  small,
  /* fontSizeWithFontFamily */
  ComicNeueMediumXXBold: {
    fontSize: bentonSansBold,
    fontFamily: Fonts.ComicNeueBold,
    color: Colors.SecondryDark,
  },
  ComicNeueMedium42: {
    fontSize: bentonSansMedium,
    fontFamily: Fonts.ComicNeueMedium,
    color: Colors.SecondryDark,
  },
  ComicNeueMedium32: {
    fontSize: extralarge,
    fontFamily: Fonts.ComicNeueMedium,
    color: Colors.SecondryDark,
  },
  ComicNeueMediumLarge: {
    fontSize: large,
    fontFamily: Fonts.ComicNeueMedium,
    color: Colors.SecondryDark,
  },
  ComicNeueMedium: {
    fontSize: medium,
    fontFamily: Fonts.ComicNeueMedium,
    color: Colors.SecondryDark,
  },
  ComicNeueMediumXXMedium: {
    fontSize: xxMedium,
    fontFamily: Fonts.ComicNeueMedium,
    color: Colors.SecondryDark,
  },
  ComicNeueMediumXXMediumRegular: {
    fontSize: xxMedium,
    fontFamily: Fonts.ComicNeueRegular,
    color: Colors.SecondryDark,
  },
  Labels: {
    fontSize: labels,
    fontFamily: Fonts.ComicNeueMedium,
    color: Colors.Black,
  },
  Body: {
    fontSize: body,
    fontFamily: Fonts.ComicNeueMedium,
    color: Colors.Black,
  },
  Regular: {
    fontSize: regular,
    fontFamily: Fonts.ComicNeueRegular,
    color: Colors.Black,
  },
  RegularRegular: {
    fontSize: regular,
    fontFamily: Fonts.ComicNeueMedium,
    color: Colors.SecondryDark,
  },
  MediumXMedium: {
    fontSize: xMedium,
    fontFamily: Fonts.ComicNeueMedium,
    color: Colors.SecondryDark,
  },
  BoldXBold: {
    fontSize: xMedium,
    fontFamily: Fonts.ComicNeueBold,
    color: Colors.SecondryDark,
  },
  BodyRegular: {
    fontSize: body,
    fontFamily: Fonts.ComicNeueRegular,
    color: Colors.SecondryDark,
  },
  Small: {
    fontSize: small,
    fontFamily: Fonts.ComicNeueRegular,
    color: Colors.Black,
  },
};
export default FontSizes;

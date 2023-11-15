import React from 'react';
import {Text, View, Image} from 'react-native';
import {images} from '@assets';
import styles from './styles';
const CustomImageBackground = ({}) => {
  return <Image source={images.pattern} style={styles.imageBackground} />;
};

export default CustomImageBackground;

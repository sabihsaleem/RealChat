/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Colors} from '@common';

const CustomText = ({title, onPress, textStyle}) => {
  return (
    <TouchableOpacity style={styles.btnNext} onPress={onPress}>
      <Text
        // colors={[Colors.PrimaryGrayLight, Colors.PrimaryGrayDark]}

        style={[textStyle, styles.btnNextText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomText;

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Colors} from '../../common';
import {CustomTextTypes} from 'types';

const CustomText = ({title, onPress, textStyle}: CustomTextTypes) => {
  return (
    <TouchableOpacity style={styles.btnNext} onPress={onPress}>
      <Text style={[textStyle, styles.btnNextText]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomText;

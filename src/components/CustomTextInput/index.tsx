import React from 'react';
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Text,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {icons} from '../../assets';
import {Colors, FontSizes} from '../../common';
import styles from './styles';
import {CustomTextInputTypes} from '../../types';

const CustomTextInput = ({
  title = '',
  onChangeText,
  returnKeyType,
  value,
  placeholderTextColor = Colors.LavanderBlosssomGrey,
  isLeft = false,
  leftIconSource = icons.email,
  backgroundColor = Colors.ChefsHat,
  isRight = false,
  onPressRight = () => {},
  onPressLeft = () => {},
  secureTextEntry = false,
  styleTextInput = {},
  styleRight = {},
  styleLeft = {},
  keyboardType = 'default',
  maxLength,
  onSubmitEditing,
  reference,
  errorText,
}: CustomTextInputTypes) => {
  return (
    <View style={styles.main}>
      <View style={[styles.container, {backgroundColor}]}>
        <View>
          {isLeft ? (
            <TouchableOpacity
              style={[styles.defaultLeftStyle, styleLeft]}
              onPress={onPressLeft}>
              <Image style={styles.sideIcon} source={leftIconSource} />
            </TouchableOpacity>
          ) : null}
        </View>
        <TextInput
          placeholder={title}
          placeholderTextColor={placeholderTextColor}
          onChangeText={onChangeText}
          value={value}
          style={[styles.defaultStyle, styleTextInput]}
          returnKeyType={returnKeyType}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          maxLength={maxLength}
          onSubmitEditing={onSubmitEditing}
          ref={reference}
        />
        <View>
          {isRight ? (
            <TouchableOpacity
              style={[styles.defaultRigthStyle, styleRight]}
              onPress={onPressRight}>
              {secureTextEntry ? (
                <Image style={styles.sideIcon} source={icons.eyeopen} />
              ) : (
                <Image style={styles.sideIcon} source={icons.eyeclosed} />
              )}
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
      {errorText ? (
        <View style={styles.error}>
          <Text style={styles.errorText}>{errorText}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default CustomTextInput;

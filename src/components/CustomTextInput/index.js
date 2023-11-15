import React from 'react';
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {icons} from '../../assets';
import {Colors, FontSizes} from '../../common';
import styles from './styles';

const CustomTextInput = ({
  title = '',
  onChangeText,
  returnKeyType = null,
  value = null,
  placeholderTextColor = Colors.LavanderBlosssomGrey,
  isLeft = false,
  leftIconSource = icons.email,
  backgroundColor = Colors.ChefsHat,
  isRight = false,
  onPressRight = {},
  onPressLeft = {},
  secureTextEntry = false,
  styleTextInput = {},
  styleRight = {},
  styleLeft = {},
  keyboardType = 'default',
  maxLength = null,
  onSubmitEditing,
  reference,
}) => {
  return (
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
      {/* </View> */}
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
  );
};

export default CustomTextInput;

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CustomSelectorTypes} from 'types';
const CustomSelector = ({
  selectorText,
  customStyles,
  isEnabled,
  toggleSwitch,
  isSwitch,
  trueTrackColor,
  falseTrackColor,
  selectedColorThumbColor,
  unSelectedColorThumbColor,
}: CustomSelectorTypes) => {
  return (
    <View style={[styles.mainSelectorView, customStyles]}>
      <TouchableOpacity style={styles.selector}>
        <Text style={styles.selectorText}>{selectorText}</Text>
        {isSwitch ? (
          <Switch
            trackColor={{false: falseTrackColor, true: trueTrackColor}}
            thumbColor={
              isEnabled ? selectedColorThumbColor : unSelectedColorThumbColor
            }
            onValueChange={toggleSwitch}
            value={isEnabled}
            ios_backgroundColor="#3e3e3e"
          />
        ) : (
          <Icon name="right" />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainSelectorView: {},
  selector: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectorText: {},
});

export default CustomSelector;

/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {CustomSelector} from '../../components';

const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.box}>
        <Text>Language</Text>
        <CustomSelector
          selectorText="Select Language"
          customStyles={styles.selector}
        />
      </View>
      <View style={styles.box}>
        <Text>Other Settings</Text>
        <CustomSelector
          selectorText="Dark Mode"
          customStyles={styles.themeModes}
          isSwitch
          toggleSwitch={toggleSwitch}
          isEnabled={isEnabled}
        />
        <CustomSelector
          selectorText="Notifications"
          customStyles={styles.notifications}
          trueTrackColor='#81b0ff'
          falseTrackColor='#767577'
          selectedColorThumbColor='#f5dd4b'
          unSelectedColorThumbColor='#423423'
        />
        <CustomSelector selectorText="Profile" customStyles={styles.profile} />
        <CustomSelector
          selectorText="Privacy Policy"
          customStyles={styles.privacyPolicy}
        />
        <CustomSelector
          selectorText="Terms and Conditions"
          customStyles={styles.tAndC}
        />
      </View>
    </SafeAreaView>
  );
};

export default Settings;

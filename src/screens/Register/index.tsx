/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './styles';

class Register extends Component {
  render() {
    return (
      <SafeAreaView style={styles.main}>
        <View>
          <Text>Register</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default Register;

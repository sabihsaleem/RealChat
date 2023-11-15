/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {CustomHeader} from '@components';
import styles from './styles';

class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.main}>
        <CustomHeader title="Home" hasSafeArea={true} />
        <View>
          <Text
            style={{
              fontFamily: 'ComicNeue-Bold',
            }}>
            Home
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;

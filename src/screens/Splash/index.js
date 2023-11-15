import React, {Component} from 'react';
import {Image, View} from 'react-native';
import styles from './styles';
import {images} from '../../assets';
class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('OnBoarding');
    }, 1000);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={images.splash} style={styles.appLogoSize} />
      </View>
    );
  }
}

export default Splash;

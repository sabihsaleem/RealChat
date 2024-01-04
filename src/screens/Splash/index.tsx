import React, {Component} from 'react';
import {Image, View} from 'react-native';
import styles from './styles';
import {images} from '../../assets';
import {Props} from 'interfaces';

class Splash extends Component<Props> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = {};
  }

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

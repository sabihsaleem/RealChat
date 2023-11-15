/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import styles from './styles';
import Swiper from 'react-native-swiper';
import {images} from '@assets';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {CustomButton} from '@components';
class OnBoarding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swipeIndex: 0,
      swipeItem: [
        {
          title: '',
          header: 'Learn english skill every day!',
          swipeImg: images.onb,
        },
        {
          title: '',
          header: 'Communicate with others.',
          swipeImg: images.onb2,
        },
        {
          title: '',
          header: 'Stay safe Learn at home!',
          swipeImg: images.onb1,
        },
      ],
    };
  }

  onSwipe(swipeIndex) {
    this.setState({
      swipeIndex,
    });
  }

  swiper = () => {
    const {swipeItem, swipeIndex} = this.state;
    return (
      <Swiper
        showsButtons={false}
        showsPagination={false}
        index={swipeIndex}
        style={{backgroundColor: 'transparent'}}
        onIndexChanged={index => this.onSwipe(index)}
        loop={false}>
        {swipeItem?.map(item => {
          return (
            <View style={styles.slide1}>
              <Image style={styles.img} source={item?.swipeImg} />
              <Text style={[styles.header]}>{item?.header}</Text>
              <Text style={styles.title}>{item?.title}</Text>
            </View>
          );
        })}
      </Swiper>
    );
  };

  button = () => {
    return (
      <CustomButton
        title="Next"
        onPress={() => {
          onNext(this.props);
        }}
      />
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.main}>
        {this.swiper()}
        {this.button()}
      </SafeAreaView>
    );
  }
}

export default OnBoarding;

export const onNext = props => {
  props?.navigation?.navigate('Login');
};

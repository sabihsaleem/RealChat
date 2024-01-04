/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import styles from './styles';
import Swiper from 'react-native-swiper';
import {images} from '../../assets';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {CustomButton} from '../../components';
import {Props, StateProps} from 'interfaces';

class OnBoarding extends Component<Props, StateProps> {
  constructor(props: Props | Readonly<Props>) {
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

  onSwipe(swipeIndex: number) {
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
        {swipeItem?.map(
          (item: {
            swipeImg: ImageSourcePropType;
            header: string;
            title: string;
          }) => {
            return (
              <View style={styles.slide1}>
                <Image style={styles.img} source={item?.swipeImg} />
                <Text style={[styles.header]}>{item?.header}</Text>
                <Text style={styles.title}>{item?.title}</Text>
              </View>
            );
          },
        )}
      </Swiper>
    );
  };

  button = () => {
    return (
      <CustomButton
        title="Next"
        onPress={() => {
          this.props?.navigation?.navigate('Login');
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

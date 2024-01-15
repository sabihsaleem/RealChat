/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import {icons, images} from '../../assets';
import {CustomTextInput, CustomText, CustomButton} from '../../components';
import styles from './styles';
import {Colors} from '../../common';
import {Props} from '../../interfaces';

const Login = ({navigation}: Props) => {
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>('');
  const [errorEmailMsg, setErrorEmailMsg] = useState<string | undefined>('');
  const [errorPasswordMsg, setErrorPasswordMsg] = useState<string | undefined>(
    '',
  );

  const socialContainer = (
    title: string | number,
    source: ImageSourcePropType,
  ) => {
    return (
      <TouchableOpacity style={[styles.socailIconBtn, styles.row]}>
        <Image source={source} style={styles.socailIcon} />
        <Text style={styles.socailIconBtnText}>{title}</Text>
      </TouchableOpacity>
    );
  };

  const imagesContainer = () => {
    return (
      <View style={styles.imagesContainer}>
        <Image source={images.logo} style={styles.logo} />
      </View>
    );
  };

  const customTextInputContainer = () => {
    return (
      <View style={styles.customTextInputContainer}>
        <CustomTextInput
          title={'Enter Your Email'}
          backgroundColor={Colors.Snow}
          placeholderTextColor={Colors.LavanderBlosssomGrey}
          returnKeyType={'next'}
          isLeft={false}
          isRight
          errorText={errorEmailMsg}
          value={email}
          onChangeText={text => {
            setEmail(text);
            setErrorEmailMsg('');
          }}
        />
        <CustomTextInput
          title={'Enter Your Password'}
          backgroundColor={Colors.Snow}
          placeholderTextColor={Colors.LavanderBlosssomGrey}
          returnKeyType={'next'}
          isLeft={false}
          isRight
          errorText={errorPasswordMsg}
          value={password}
          onChangeText={text => {
            setPassword(text);
            setErrorPasswordMsg('');
          }}
        />
      </View>
    );
  };

  const forgotPassword = () => {
    return (
      <CustomText
        title="Forgot Your Password?"
        textStyle={styles.forgotPasword}
      />
    );
  };

  const onLogin = () => {
    if (!email?.trim() && !password?.trim()) {
      setErrorEmailMsg('Email is required');
      setErrorPasswordMsg('Password is required');
    } else {
      navigation.navigate('BottomTabs');
    }
  };

  const button = () => {
    return <CustomButton title="Login" onPress={onLogin} />;
  };

  return (
    <View style={styles.main}>
      {imagesContainer()}
      <Text style={styles.header}>Login To Your Account</Text>
      {customTextInputContainer()}
      <Text style={styles.contextText}>Or Continue With</Text>
      <View style={[styles.socialContainer, styles.row]}>
        {socialContainer('Facebook', icons.facebook)}
        {socialContainer('Google', icons.google)}
      </View>
      {forgotPassword()}
      {button()}
    </View>
  );
};

export default Login;

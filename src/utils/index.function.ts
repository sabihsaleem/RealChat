import React, {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {Alert, BackHandler, NativeEventSubscription} from 'react-native';

export default () => {
  const isFocused = useIsFocused();

  // const [hanlderText, setHandlerText] = useState('');

  const onYesPress = () => {};

  const backAction = (hanlderText?: string) => {
    Alert.alert('Hold on!', `Are you really sure want to exit ${hanlderText}`, [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => onYesPress()},
    ]);
    return true;
  };

  useEffect(() => {
    let backHandler: NativeEventSubscription;
    if (isFocused) {
      backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );
    }

    return () => backHandler?.remove();
  }, [isFocused]);

  return {
    // setHandlerText,
    // hanlderText,
    onYesPress,
    backAction,
  };
};

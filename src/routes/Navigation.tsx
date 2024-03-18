import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Splash, Login, OnBoarding, Register} from '../screens';
import BottomStack from './BottomStack';
import {navigationRef} from './service';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Splash"
          component={Splash as React.ComponentType<any>}
        />
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding as React.ComponentType<any>}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Register"
          component={Register as React.ComponentType<any>}
        />
        <Stack.Screen name="BottomTabs" component={BottomStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

import React from 'react';
import {SafeAreaView} from 'react-native';
import Navigation from './src/routes/Navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <Navigation />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;

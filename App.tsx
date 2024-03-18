import React from 'react';
import {SafeAreaView} from 'react-native';
import Navigation from './src/routes/Navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
          <Toast
            position="bottom"
            bottomOffset={20}
            autoHide={true}
            visibilityTime={5000}
          />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;

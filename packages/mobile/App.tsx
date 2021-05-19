import React from 'react';
import '@universal/common/src';
import {Provider} from 'react-redux';
import store from '@universal/common/src/redux/store';
import Navigator from './src/navigator';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <PaperProvider>
          <Navigator />
        </PaperProvider>
        <StatusBar
          backgroundColor="transparent"
          barStyle="dark-content"
          translucent></StatusBar>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;

import React from 'react';
import './request';
import {Provider} from 'react-redux';
import store from './redux/store';
import Navigator from './navigator';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar, Platform} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <PaperProvider>
          <>
            {Platform.OS === 'web' ? (
              <style type="text/css">{`
        @font-face {
          font-family: 'MaterialCommunityIcons';
          src: url(${require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf')}) format('truetype');
        }
      `}</style>
            ) : null}
            <Navigator />
          </>
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

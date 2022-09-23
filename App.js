/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Provider, useSelector } from 'react-redux';
import Routes from './pages/routes';
import { store } from './redux/store';
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"
import { LogBox, View } from 'react-native';

LogBox.ignoreAllLogs();

let persistor = persistStore(store)
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
      <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;

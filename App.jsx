import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootNavigator from './src/navigation/rootNavigator';
import store from './src/store';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </Provider>
  );
};

export default App;

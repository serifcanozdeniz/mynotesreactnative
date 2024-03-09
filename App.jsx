import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigatoor from './src/router/rootNavigatoor';
import Provider from './src/context/provider';

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <RootNavigatoor />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

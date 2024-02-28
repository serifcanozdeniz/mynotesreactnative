import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigatoor from './src/router/rootNavigatoor';

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigatoor />
    </NavigationContainer>
  );
};

export default App;

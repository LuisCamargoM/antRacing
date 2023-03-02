import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { client } from './src/context/ApolloProvider';
import { FetchProvider } from './src/context/Fetcher';
import { AppNavigator } from './src/navigation/AppNavigator';

const App = () => {
  return (
    <FetchProvider>
      <AppNavigator />
    </FetchProvider>
  )
};

export default App;

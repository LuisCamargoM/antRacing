import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { Provider } from 'react-redux';
import { client } from './src/context/ApolloProvider';
import { FetchProvider } from './src/context/Fetcher';
import { AppNavigator } from './src/navigation/AppNavigator';
import { store } from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <FetchProvider>
        <AppNavigator />
      </FetchProvider>
    </Provider>
  )
};

export default App;

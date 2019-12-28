import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import registerServiceWorker from './registerServiceWorker';
import apolloClient from './graphql/client';
import App from './app';

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
/* eslint-enable react/jsx-filename-extension */

registerServiceWorker();

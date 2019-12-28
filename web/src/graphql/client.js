import ApolloClient from 'apollo-boost';

import settings from '../settings';

export default new ApolloClient({
  uri: settings.apiAddress,
});

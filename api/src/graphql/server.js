import { ApolloServer } from 'apollo-server';
import glue from 'schemaglue';

export default () => {
  const options = { js: '**/*.js' };

  const {
    schema,
    resolver,
  } = glue('./', options);

  const server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolver,
  });

  server.listen().then(({ url }) => {
    // eslint-disable-next-line no-console
    console.log(`🚀 GraphQL server ready at ${url}`);
  });
};

import { ApolloClient, InMemoryCache, split, HttpLink } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';

const PORT_NUMBER = 5196;

// HTTP link for regular queries and mutations
const httpLink = new HttpLink({
  uri: `http://localhost:${PORT_NUMBER}/graphql`,
});

// WebSocket link for subscriptions
const wsLink = new GraphQLWsLink(
  createClient({
    url: `ws://localhost:${PORT_NUMBER}/graphql`, // WebSocket endpoint
  })
);

// Split link to direct operations to the appropriate link
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

// Create Apollo Client instance
const apolloClient = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default apolloClient;

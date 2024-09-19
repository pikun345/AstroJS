// src/lib/apolloClient.ts

import { ApolloClient, InMemoryCache } from "../../node_modules/@apollo/client/index";

const client = new ApolloClient({
  uri: 'https://api.staging.zetamatic.com/graphql',
  cache: new InMemoryCache(),
  
});

export default client;

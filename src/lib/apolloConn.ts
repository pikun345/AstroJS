// src/lib/apolloClient.ts

import { ApolloClient, InMemoryCache } from "../../node_modules/@apollo/client/index";

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  
});

export default client;

import ApolloClient from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';

const errorlink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }
  if (networkError) { console.log(`[Network error]: ${networkError}`); }
});

const httpLink = new HttpLink({
  uri: 'http://localhost/graphql',
  credentials: 'same-origin',
  headers: {
    authorization: localStorage.getItem('token') || null
  }
});

const link = ApolloLink.from([
  errorlink,
  httpLink,
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

export default client;
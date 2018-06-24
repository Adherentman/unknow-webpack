import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import App from './components/App';
import BackStage from './backstage/BackStage';
// import LoginForm from './backstage/components/Auth/LoginForm';
import RegisterForm from './backstage/components/Auth/RegisterForm';
import ApolloClient from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';
import './index.scss';

const errorlink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		graphQLErrors.map(({ message, locations, path }) =>
			console.log(
				`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
			)
		);
	}
	if (networkError) {
		console.log(`[Network error]: ${networkError}`);
	}
});

const httpLink = new HttpLink({
	uri: 'http://localhost/graphql',
	credentials: 'same-origin',
	headers: {
		authorization: localStorage.getItem('token') || null
	}
});

const link = ApolloLink.from([errorlink, httpLink]);

const client = new ApolloClient({
	link,
	cache: new InMemoryCache()
});

client
	.query({
		query: gql`
			{
				names {
					username
					password
					email
				}
			}
		`
	})
	.then(result => console.log(result));
export const TextContext = React.createContext('你好');

ReactDOM.render(
	// <TextContext.Provider value="不好呀">
	<ApolloProvider client={client}>
		<RegisterForm />
	</ApolloProvider>,
	// </TextContext.Provider>,
	document.getElementById('root')
);

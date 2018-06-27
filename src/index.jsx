import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import App from './components/App';
import RegisterForm from './backstage/components/Auth/RegisterForm';
import BackStage from './backstage/BackStage';
import { client } from './utils';
import './index.scss';

export const TextContext = React.createContext('你好');

ReactDOM.render(
	// <TextContext.Provider value="不好呀">
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	// </TextContext.Provider>,
	document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import BackStage from './backstage/BackStage';
import LoginForm from './backstage/components/Auth/LoginForm';
import './index.scss';

export const TextContext = React.createContext('你好');

ReactDOM.render(
	<TextContext.Provider value="不好呀">
		<LoginForm />
	</TextContext.Provider>,
	document.getElementById('root')
);

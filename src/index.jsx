import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import BackStage from './backstage/BackStage';
// import LoginForm from './backstage/components/Auth/LoginForm';
import RegisterForm from './backstage/components/Auth/RegisterForm';
import './index.scss';

export const TextContext = React.createContext('你好');

ReactDOM.render(
	<TextContext.Provider value="不好呀">
		<RegisterForm />
	</TextContext.Provider>,
	document.getElementById('root')
);

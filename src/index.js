import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import BackStage from './backstage/BackStage';
import './index.scss';

export const TextContext = React.createContext('你好');

ReactDOM.render(
	<TextContext.Provider value="不好呀">
		<BackStage />
	</TextContext.Provider>,
	document.getElementById('root')
);

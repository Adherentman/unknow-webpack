import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

export const TextContext = React.createContext('你好');

ReactDOM.render(
  <TextContext.Provider value="不好呀">
    <App />
  </TextContext.Provider>,
  document.getElementById('root'));

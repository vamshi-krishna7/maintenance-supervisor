import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import LogState from './components/context/logs/logState';

ReactDOM.render(
    <LogState>
        <App />
    </LogState>,
    document.querySelector('#root')
);
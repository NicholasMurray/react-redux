import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const state = [
    { id: 1, description: 'Create Static UI', isCompleted: true },
    { id: 2, description: 'Create Initial State', isCompleted: true },
    { id: 3, description: 'Use State to Render UI', isCompleted: false },
]

ReactDOM.render(<App todos={state} />, document.getElementById('root'));
registerServiceWorker();

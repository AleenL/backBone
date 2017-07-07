import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <
    div className = 'title' >
    你好， 世界！ <
    /div>,
    document.getElementById('root2')
);

registerServiceWorker()
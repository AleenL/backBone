import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Welcome from './Welcome';


ReactDOM.render( <
    Welcome width = "120px" / > ,
    document.getElementById('root2')
);

//setInterval(tick, 1000);
registerServiceWorker()
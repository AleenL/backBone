import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Welcome from './Welcome';


ReactDOM.render( <
    Welcome / > ,
    document.getElementById('root2')
);

//setInterval(tick, 1000);
registerServiceWorker()
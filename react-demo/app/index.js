import React from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'

import RouteMap from './router/routerMap'
import 'normalize.css'

ReactDOM.render( 
	<App />,
    document.getElementById('root2')
);


registerServiceWorker()
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Login from '../containers/login.jsx';
import Home from '../containers/home.jsx';

export default (
	<Router history={browserHistory}>
		<Route path="/" component={Login} />
		<Route path="home" component={Home} />
	</Router>
);
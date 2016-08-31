import React from 'react';
import { Router, Route, browserHistory, IndexRoute, createMemoryHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from '../containers/login.jsx';
import Home from '../containers/home.jsx';
import Header from '../containers/header.jsx';
import Signup from '../containers/signup.jsx';

var history;
if (typeof(window) !== 'undefined') {
	history = browserHistory;
} else {
	history = createMemoryHistory();
}

export default (
	<MuiThemeProvider>
		<Router history={history}>
			<Route path="/" component={Header}>
				<IndexRoute component={Login}/>
				<Route path="signup" component={Signup} />
				<Route path="home" component={Home} />
			</Route>
		</Router>
	</MuiThemeProvider>
);
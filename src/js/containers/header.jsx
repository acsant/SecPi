import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import ReactDOM from 'react-dom';

require('./_header.scss');
require('react-bootstrap');

class Header extends React.Component {
	constructor (props, context) {
		super(props, context);
		this.state = {};
		this.state.open = false;
		console.log("header rendered");
	}

	render () {
		let _title = "SecPi";
		let _signIn = "Sign In";
		return (
			<div id="page_container">
				<AppBar
					title={
						<Link to="/" className="AppBar__title">
							<span className="Menu--title">
								{_title}
							</span>
						</Link>
					}>
					<Link to="/" className="a__link">
						<span>
							{_signIn}
						</span>
					</Link>

				</AppBar>
				{this.props.children}
			</div>
		)
	}
};

export default Header; 
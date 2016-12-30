import React from 'react';
import ReactDOM from 'react-dom';
import Paper from 'material-ui/Paper';
import SecPiActions from '../actions/SecPiActions';
import ServerActions from '../actions/ServerActions';
import AuthenticationStore from '../stores/AuthenticationStore';

require('./_home.scss');
require('react-bootstrap');


class Home extends React.Component {

	constructor (props, context) {
		super(props, context);
	}

	componentDidMount () {
		ServerActions.getCurrentUser(this.props.location.query.id);
	}

	componentWillUnmount() {

	}

	render () {
		return (
		<div className="container div__marginTop">
			<Paper zDepth={1} className="paper__mediaPiece">
				<div className="div__about">
					<h3>Security Stream</h3>
					<div id='sec-stream'></div>
				</div>
			</Paper>
		</div>
		)
	}
}

export default Home;

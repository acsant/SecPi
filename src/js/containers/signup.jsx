import React from 'react';
import ReactDOM from 'react-dom';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
var {_handleFirstNameChange, _handleLastNameChange} = require('../services/AuthenticationService');
var {_handleEmailChange, _handlePasswordChange, _handleConfirmedPassword} = require('../services/AuthenticationService');

require('./_login.scss');
require('react-bootstrap');

class Signup extends React.Component {
	constructor(props, context){
        super(props, context);
        this.state={};
        this.state.error="";
        this.state.email="";
        this.state.password="";
        this.state.confirmPassword="";
        this.state.firstName="";
        this.state.lastName="";
        this.history=props.history;
        this.showSessionMsg=props.location.query ? props.location.query.session:true;
        this._handleFirstNameChange = _handleFirstNameChange.bind(this);
        this._handleLastNameChange = _handleLastNameChange.bind(this);
        this._handlePasswordChange = _handlePasswordChange.bind(this);
        this._handleEmailChange = _handleEmailChange.bind(this);
        this._handleConfirmedPassword = _handleConfirmedPassword.bind(this);
        this._formSubmit = this._formSubmit.bind(this);
    }

    _formSubmit(e) {
        e.preventDefault();
        if (this.state.errorPassword == '' && this.state.errorEmail == '') {
            this.setState({error : 'Signing in ...'});

        }
    }

	render() {
    return (
    		<div className="container div__marginTop">
                <Paper zDepth={1} className="paper__mediaPiece">
                    <div className="div__about">
                        <h3>Sign In</h3>

                        <form>
                        	<TextField hintText="First Name"
                                floatingLabelText="First Name"
								errorText={this.state.errorFirstName}
                                value={this.state.firstName}
                                onChange={this._handleFirstNameChange}
                                />
                            <br/>
                            <TextField hintText="Last Name"
                                floatingLabelText="Last Name"
                                errorText={this.state.errorLastName}
                                value={this.state.lastName}
                                onChange={this._handleLastNameChange}
                                />
                            <br/>
                            <TextField hintText="Email"
                                errorText={this.state.errorEmail}
                                floatingLabelText="Email"
                                value={this.state.email}
                                onChange={this._handleEmailChange}
                                />
                            <br/>
                            <TextField hintText="Password"
                                errorText={this.state.errorPassword}
                                floatingLabelText="Password"
                                onChange={this._handlePasswordChange}
                                value={this.state.password}
                                type="password"
                                />
                            <br/>
                            <TextField hintText="Confirm Password"
                            	errorText={this.state.errorConfirmPass}
                            	floatingLabelText="Confirm Password"
                            	onChange={this._handleConfirmedPassword}
                            	value={this.state.confirmPassword}
                            	type="password"
                            	/>
                            <br/>
                            <br/>
                            <RaisedButton label="Sign Up"
                                primary={true}
                                onClick={this._formSubmit}
                                />
                            <br/>
                        </form>
                    </div>
                </Paper>
            </div>
    	)
  }
}

export default Signup;
import React from 'react';
import ReactDOM from 'react-dom';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AuthenticationStore from '../stores/AuthenticationStore';
var {_handleEmailChange, _handlePasswordChange} = require('../services/AuthenticationService');
import SecPiActions from '../actions/SecPiActions';

require('./_login.scss');
require('react-bootstrap');

 
class Login extends React.Component {

    constructor(props, context){
        super(props, context);
        this.state={
            loggedIn: false
        };
        this.state.error="";
        this.state.email="";
        this.state.password="";
        this.history=props.history;
        this.showSessionMsg=props.location.query ? props.location.query.session:true;
        this._handlePasswordChange = _handlePasswordChange.bind(this);
        this._handleEmailChange = _handleEmailChange.bind(this);
        console.log("login called");
    }

    render() {
    return (
    		<div className="container div__marginTop">
                <Paper zDepth={1} className="paper__mediaPiece">
                    <div className="div__about">
                        <h3>Sign In</h3>

                        <form action="/" formMethod="POST">
                            <TextField name='email' hintText="Email"
                                errorText={this.state.errorEmail}
                                floatingLabelText="Email"
                                value={this.state.email}
                                onChange={this._handleEmailChange}
                                />
                            <br/>
                            <TextField name='password' hintText="Password"
                                errorText={this.state.errorPassword}
                                floatingLabelText="Password"
                                onChange={this._handlePasswordChange}
                                value={this.state.password}
                                type="password"
                                />
                            <br/>
                            <RaisedButton type="submit" formMethod="post" label="Sign In"
                                primary={true} 
                                />
                            <br/>
                            <br/>
                            <RaisedButton href="/auth/facebook" 
                                label="Facebook Login"
                                />

                        </form>
                    </div>
                </Paper>
            </div>
    	)
  }
}

export default Login;
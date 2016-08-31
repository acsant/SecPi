import React from 'react';
import ReactDOM from 'react-dom';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
var {_handleEmailChange, _handlePasswordChange} = require('../services/AuthenticationService');

require('./_login.scss');
require('react-bootstrap');
 
class Login extends React.Component {

    constructor(props, context){
        super(props, context);
        this.state={};
        this.state.error="";
        this.state.email="";
        this.state.password="";
        this.history=props.history;
        this.showSessionMsg=props.location.query ? props.location.query.session:true;
        this._handlePasswordChange = _handlePasswordChange.bind(this);
        this._handleEmailChange = _handleEmailChange.bind(this);
        this._formSubmit = this._formSubmit.bind(this);
        console.log("login called");
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
                            <RaisedButton label="Sign In"
                                primary={true}
                                onClick={this._formSubmit}
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
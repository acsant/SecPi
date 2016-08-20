import React from 'react';
import ReactDOM from 'react-dom';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

require('./_login.scss');
require('react-bootstrap');

var Bttn = require('react-bootstrap/lib/Button');
let username, password
 
class Login extends React.Component {

    constructor(props, context){
        super(props, context);
        this.state={};
        this.state.error="";
        this.state.email="";
        this.state.password="";
        this.history=props.history;
        this.showSessionMsg=props.location.query ? props.location.query.session:true;
        this._handlePasswordChange = this._handlePasswordChange.bind(this);
        this._handleEmailChange = this._handleEmailChange.bind(this);
        this._formSubmit = this._formSubmit.bind(this);
        console.log("login called");
    }

    _handleEmailChange(e) {
        this.state.errorEmail = "";
        var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if (!e.target.value) {
            this.state.errorEmail = "This field is required";
        } else if (!regex.test(e.target.value)) {
            this.state.errorEmail = "Email is not valid";
        } 
        this.setState({errorEmail : this.state.errorEmail});
        this.setState({email : e.target.value});
    }

    _handlePasswordChange(e) {
        this.state.errorPassword = "";
        if (!e.target.value) {
            this.state.errorPassword = "This field is required";

        } else if (e.target.value.length < 6) {
            this.state.errorPassword = "Password needs more than 6 characters.";
        }
        this.setState({errorPassword : this.state.errorPassword});
        this.setState({password : e.target.value});
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
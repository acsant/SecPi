import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

require('./_login.scss');
require('react-bootstrap');

import Home from './home.jsx';

var Bttn = require('react-bootstrap/lib/Button');
let username, password
 
class Login extends React.Component {
  render() {
    return (
    		<div>
    			<form className='form' onSubmit={e => {
    				e.preventDefault()
    				if (!username.value.trim()) {
    					return
    				}

    				var pass = document.getElementById('pass')
    				if (password.value != 'akashtest') {
    					pass.style.backgroundColor = 'red';
    				} else {
    					pass.style.backgroundColor = 'white';
    				}

    				username.value = ''
    				password.value = ''
    			}}>
    				<input id="user" type="email" placeholder="EMAIL" className="input input__email input--darkblueborder"
    				ref={node => {
    					username = node
    				}} />

    				<input id="pass" type="password" placeholder="PASSWORD" className="input input__password input--darkblueborder"
    				ref={ node =>{
    					password = node
    				}} />

    				<Link to="/home"><Bttn type="submit" bsStyle="primary" className="btn input__next input--darkblueborder btn-primary"> Next </Bttn></Link>
    			</form>
    		</div>
    	)
  }
}

export default Login;
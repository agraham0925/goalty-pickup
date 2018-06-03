import React, { Component } from 'react';
import './style.css';
import firebase, { auth, provider } from '../firebase.js';

class LoginRegister extends Component {
	constructor() {
		super();
	}   
	render() {
		return(
			<div>
                    <div className="login">
                         <h2>Login</h2>
                         <h4>If you already have an account, login here:</h4>
				      <form>
                              <input className="form-fields" type="text" name="email" placeholder="email" value={this.props.email} onChange={this.props.handleChange} /> <br />
                              <input className="form-fields" type="password" name="password" placeholder="password" value={this.props.password} onChange={this.props.handleChange} /> <br />
                              <button className="btn" onClick={this.props.login}>Submit</button>
                         </form>
                    </div>
                    <div className="register">
                         <h2>Register</h2>
                         <h4> Create an account below:</h4>
                         <form>
                              <input className="form-fields" type="text" name="fNameR" placeholder="first name" value={this.props.fNameR} onChange={this.props.handleChange} /> <br />
                              <input className="form-fields" type="text" name="lNameR" placeholder="last name" value={this.props.lNameR} onChange={this.props.handleChange} /> <br />
                              <input className="form-fields" type="text" name="phoneR" placeholder="phone number" value={this.props.phoneR} onChange={this.props.handleChange} /> <br />
                              <input className="form-fields" type="text" name="emailR" placeholder="email" value={this.props.emailR} onChange={this.props.handleChange} /> <br />
                              <input className="form-fields" type="password" name="passwordR" placeholder="password" value={this.props.passwordR} onChange={this.props.handleChange} /> <br />
                              <h5> Note: Phone number will only be used to send text messages regarding game status.</h5> <br />
                              <button className="btn" onClick={this.props.register}> Register </button>
                         </form>
                    </div>
			</div>
		)
	}
}

export default LoginRegister;
import React, { Component } from 'react';
import './style.css';

class LoginRegister extends Component {
	constructor() {
		super();

		this.state = {
			user: '',
			password: '',
			registering: false
		}
	}
	handleSubmit = (e) => {
		e.preventDefault();

		if(this.state.registering) 
			this.props.doRegister(this.state.user, this.state.password)
		else
			this.props.doLogin(this.state.user, this.state.password)
	}
	handleInput = (e) => {
		const whichField = e.currentTarget.name
		if(whichField === "username")
			this.setState({user: e.currentTarget.value})
		else
			this.setState({password: e.currentTarget.value})
	}
	registration = () => {
		this.setState({registering: true})
	}
	loggingin = () => {
		this.setState({registering: false})
	}

	render() {
		return(
			<div>
				<p><span className={this.state.registering ? "current" : null } onClick={this.registration}>Register</span> • <span className={this.state.registering ? null : "current"} onClick={this.loggingin}>Login</span></p>
				<form onSubmit={this.handleSubmit}>
					<input type="text" name="username" placeholder="username" value={this.state.user} onChange={this.handleInput} /> <br />
					<input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleInput} /> <br />
					<input type="submit"/>
				</form>
			</div>
		)
	}
}


export default LoginRegister;
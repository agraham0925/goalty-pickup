import React, { Component } from 'react';
import './style.css';
import firebase, { auth, provider } from '../firebase.js';

class LoginRegister extends Component {
	constructor() {
		super();

		this.state = {
			email: '',
               password: '',
               emailR: '',
               passwordR: ''
		}
		this.login = this.login.bind(this);
          this.handleChange = this.handleChange.bind(this);
          this.register = this.register.bind(this);
  // 		this.logout = this.logout.bind(this);
	}
     handleChange(e) {
          this.setState({ [e.target.name]: e.target.value });
     }
     login(e) {
          e.preventDefault();
          // console.log("you are trying to log in")
          firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {  
          }).catch((err) => {
               console.log(err)
          });
     }
     register(e){
          e.preventDefault();
          firebase.auth().createUserWithEmailAndPassword(this.state.emailR, this.state.passwordR)
          .catch((err) => {
               console.log(err);
          })
     }

	render() {
		return(
			<div>
                    <h2>Login</h2>
				<form>
                         <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange} /> <br />
                         <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} /> <br />
                         <input type="submit" onClick={this.login}/>
                    </form>

                    <h2>Register</h2>
                    <form>
                         <input type="text" name="emailR" placeholder="email" value={this.state.emailR} onChange={this.handleChange} /> <br />
                         <input type="password" name="passwordR" placeholder="password" value={this.state.passwordR} onChange={this.handleChange} /> <br />
                         <button onClick={this.register}> Register </button>
                    </form>
			</div>
		)
	}
}

export default LoginRegister;
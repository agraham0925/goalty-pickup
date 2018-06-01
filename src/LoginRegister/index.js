import React, { Component } from 'react';
import './style.css';
import firebase, { auth, provider } from '../firebase.js';

class LoginRegister extends Component {
	constructor() {
		super();

		this.state = {
			email: '',
               password: '',
               username: '',
               emailR: '',
               passwordR: '',
               fNameR: '',
              lNameR: '',
               phoneR: ''
		}
	}
     handleChange = (e) => {
          this.setState({ [e.target.name]: e.target.value });
     }
     login = (e) => {
          e.preventDefault();
          // console.log("you are trying to log in")
          firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {  
          }).catch((err) => {
               console.log(err)
          });

          //need to make a call to the firebase DB to grab user info from USERS database
     }
     register = (e) => {
          e.preventDefault();
          firebase.auth().createUserWithEmailAndPassword(this.state.emailR, this.state.passwordR)
          // console.log(this.state.emailR, " this is new user emailR")
          // console.log(this.state.phoneR, " this is new user phoneR")
          // console.log(this.state.fNameR, " this is new user fNameR")
          // console.log(this.state.lNameR, " this is new user lNameR")
          .catch((err) => {
               console.log(err);
          })

          this.props.newUserListener();
          //simulaneously, call another function to create a user
          // this.props.addUser from App.js
     }
     componentDidMount(){



     }

	render() {
		return(
			<div>
                    <div className="login">
                         <h3>Login</h3>
                         <h4>If you already have an account, login here:</h4>
				      <form>
                              <input className="form-fields" type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange} /> <br />
                              <input className="form-fields" type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} /> <br />
                              <button className="btn" onClick={this.login}>Submit</button>
                         </form>
                    </div>
                    <div className="register">
                         <h3>Register</h3>
                         <h4> Create an account below:</h4>
                         <form>
                              <input className="form-fields" type="text" name="fNameR" placeholder="first name" value={this.state.fNameR} onChange={this.handleChange} /> <br />
                              <input className="form-fields" type="text" name="lNameR" placeholder="last name" value={this.state.lNameR} onChange={this.handleChange} /> <br />
                              <input className="form-fields" type="text" name="phoneR" placeholder="phone number" value={this.state.phoneR} onChange={this.handleChange} /> <br />
                              <input className="form-fields" type="text" name="emailR" placeholder="email" value={this.state.emailR} onChange={this.handleChange} /> <br />
                              <input className="form-fields" type="password" name="passwordR" placeholder="password" value={this.state.passwordR} onChange={this.handleChange} /> <br />
                              <small> Note: Phone number will only be used to send text messages regarding game status.</small> <br />
                              <button className="btn" onClick={this.register}> Register </button>
                         </form>
                    </div>
			</div>
		)
	}
}

export default LoginRegister;
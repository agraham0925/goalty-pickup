import React, { Component } from 'react';
import './style.css';
import firebase, { auth, provider } from '../firebase.js';

class LoginRegister extends Component {
	constructor() {
		super();

		this.state = {
			email: '',
               password: ''
		}
		this.login = this.login.bind(this);
          this.handleChange = this.handleChange.bind(this);
  // 		this.logout = this.logout.bind(this);
	}
     handleChange(e) {
          this.setState({ [e.target.name]: e.target.value });
     }
     login(e) {
          e.preventDefault();
          console.log("you are trying to log in")
          firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {  
          }).catch((err) => {
               console.log(err)
          });
     }
	// logout() {
	// 	auth.signOut()
	// 	.then(() => {
	// 	this.setState({user: null});
 //    });
	// }

 // {this.state.user ?
//                     <button onClick={this.logout}>Log Out</button>                
//                     :
//                     <button onClick={this.login}>Log In</button>              
//                     }

	render() {
		return(
			<div>
				<form>
                         <input type="text" name="email" placeholder="username" value={this.state.email} onChange={this.handleChange} /> <br />
                         <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} /> <br />
                         <input type="submit" onClick={this.login}/>
                    </form>
			</div>
		)
	}
}

export default LoginRegister;

















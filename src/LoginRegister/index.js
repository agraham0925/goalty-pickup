// import React, { Component } from 'react';
// import './style.css';
// import firebase, { auth, provider } from './firebase.js';

// class LoginRegister extends Component {
// 	constructor() {
// 		super();

// 		this.state = {
// 			user: '',
//       		// email: '',
//       		// password: '',
//       		// phone: '',
//       		// first_name: '',
//       		// last_name: ''
// 			registering: false
// 		}
// 		this.login = this.login.bind(this);
//   		this.logout = this.logout.bind(this);
// 	}
// 	handleSubmit = (e) => {
// 		e.preventDefault();

// 		if(this.state.registering) 
// 			this.doRegister(this.state.user, this.state.password)
// 		else
// 			this.props.doLogin(this.state.user, this.state.password)
// 	}
// 	handleInput = (e) => {
// 		const whichField = e.currentTarget.name
// 		if(whichField === "username")
// 			this.setState({user: e.currentTarget.value})
// 		else
// 			this.setState({password: e.currentTarget.value})
// 	}

// 	logout() {
// 		auth.signOut()
// 		.then(() => {
// 		this.setState({user: null});
//     });
// 	}
// 	login() {
//   		auth.signInWithPopup(provider) 
//   		  .then((result) => {
//   		    const user = result.user;
//   		    this.setState({user});
//   		});
// 	}
	// registration = () => {
	// 	this.setState({registering: true})
	// }
	// loggingin = () => {
	// 	this.setState({registering: false})
	// }

	// doRegister = (user, password) => {
 //    	console.log("you are trying to register");

 //    	const usersRef = firebase.database().ref('users');

 //    	const user = {
 //    		user: '',
 //      		email: '',
 //      		password: '',
 //      		phone: '',
 //      		first_name: '',
 //      		last_name: ''
 //    	}

 //        usersRef.push(user);

          
     //      let user = snapshot.val();
     //      let newState = [];
     //      for (let user in users) {
     //        newState.push({
     //          user: item,
     //          title: items[item].title,
     //          user: items[item].user
     //        });
     //      }
     //      this.setState({
     //        items: newState
     //      });
     //    });
//   	}

// 	render() {
// 		return(
// 			<div>
// 				{this.state.user ?
//     				<button onClick={this.logout}>Log Out</button>                
//     				:
//     				<button onClick={this.login}>Log In</button>              
//   				}
// 			</div>
// 		)
// 	}
// }


// export default LoginRegister;
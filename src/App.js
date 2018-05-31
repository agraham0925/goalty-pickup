import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';
import UserPage from './UserPage';
import UserGameAvailability from './UserGameAvailability';
// import LoginRegister from './LoginRegister';
// import { Route, Link, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      user: null
    }
    // this.login = this.login.bind(this);
    // this.logout = this.logout.bind(this);
  }

  // getUsers() {
  //   const firebaseUsers = firebase.database().ref().child("users");

  //   firebaseUsers.on('value', function(snapshot){
  //     firebaseUsers.innerText = snapshot.val();

  //     console.log(firebaseUsers.innerText, " this is the users in firebase")
  //   });
  // }
  // doLogin = (user, password) => {
  //   console.log("you are trying to login");
  // }
  // logout() {
  //  auth.signOut()
  //  .then(() => {
  //  this.setState({user: null});
  //   });
  // }
  // login() {
  //   auth.signInWithPopup(provider) 
  //     .then((result) => {
  //       const user = result.user;
  //       this.setState({user});
  //   });
  // }

  render() {
    return (
      <div className="App">
      <button onClick={this.getUsers}>get users test</button>
      {this.state.user ?
        <button onClick={this.logout}>Log Out</button>                
        :
        <button onClick={this.login}>Log In</button>              
      }

      <UserPage user={this.state.user} responses={this.state.responses}/>
      <UserGameAvailability />
      </div>
    );
  }
}

export default App;










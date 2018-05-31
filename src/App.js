import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';
import UserPage from './UserPage';
import UserGameAvailability from './UserGameAvailability';
import LoginRegister from './LoginRegister';
// import { Route, Link, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      user: {},
    }
    // this.login = this.login.bind(this);
    // this.logout = this.logout.bind(this);
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({user});
      } else {
        this.setState({user: null});
      }
    });
  }

  componentDidMount() {
    this.authListener()
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



  // <button onClick={this.getUsers}>get users test</button>
  //     {this.state.user ?
  //       <button onClick={this.logout}>Log Out</button>                
  //       :
  //       <button onClick={this.login}>Log In</button>              
  //     }
// <UserPage user={this.state.user} responses={this.state.responses}/>
  render() {
    return (
      <div className="App">
      {this.state.user ? (<UserGameAvailability />) : (<LoginRegister />)}

      </div>
    );
  }
}

export default App;










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
      users: [],
      email: '',
      password: '',
      phone: '',
      first_name: '',
      last_name: ''
    }
  }

  getUsers() {
    const firebaseUsers = firebase.database().ref().child("users");

    firebaseUsers.on('value', function(snapshot){
      firebaseUsers.innerText = snapshot.val();

      console.log(firebaseUsers.innerText, " this is the users in firebase")
    });
  }
  doLogin = (user, password) => {
    console.log("you are trying to login");
  }
  doRegister = (user, password) => {
    console.log("you are trying to register");
  }

  render() {
    return (
      <div className="App">
      <button onClick={this.getUsers}>get users test</button>

      <UserPage user={this.state.user} responses={this.state.responses}/>
      <UserGameAvailability />
      <LoginRegister doRegister={this.doRegister} doLogin={this.doLogin} />
      </div>
    );
  }
}

export default App;










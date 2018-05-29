import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';
import UserPage from './UserPage';
import UserGameAvailability from './UserGameAvailability';

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

  render() {
    return (
      <div className="App">
      <button onClick={this.getUsers}>get users test</button>

      <UserPage user={this.state.user} responses={this.state.responses}/>
      <UserGameAvailability />
      </div>
    );
  }
}

export default App;

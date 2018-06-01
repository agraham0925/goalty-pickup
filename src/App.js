import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';
// import * as admin from "firebase-admin";
import UserPage from './UserPage';
import UserGameAvailability from './UserGameAvailability';
import LoginRegister from './LoginRegister';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      user: {},
      email: '',
      uid: '',
      phone: '',
      fName: '',
      lName: ''
    }
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({
          user,
          email: user.email,
          uid: user.uid,
        });
        this.findUser()
        console.log(this.state, " this is state")
        console.log(this.props.lastnameR, " this is last name")
      } else {
        this.setState({user: null});
      }
    });
  }

  componentDidMount() {
    this.authListener()
  }

  logOut() {
    firebase.auth().signOut()
  }

  findUser = () => {

    function snapshotToArray(snapshot) {
      const returnUserArr = [];

      snapshot.forEach((childSnapshot) => {
        const item = childSnapshot.val();

        item.key = childSnapshot.key;

        returnUserArr.push(item);
      })
      return returnUserArr
    }

    firebase.database().ref('users').on('value', (snapshot) => {
      const userArr = [];

      const Firebase = snapshotToArray(snapshot).map((u) => {
        const user = u.key

        if(user === this.state.uid) {
          this.setState({
            phone: u.phone,
            fName: u.firstname,
            lName: u.lastname
          })
          console.log(this.state, ' this is state after user info added')
        } else {
          console.log("nope")
        }
      })  
    });
  }

  newUserListener = () => {
    console.log('newUserListener function hit')
    // exports.createProfile = functions.auth.user().onCreate( event => {
    //   return firebase.database().ref('/users/' + event.data.uid).set({
    //     firstName: this.props.fNameR,
    //     lastName: this.props.lNameR
    //   });
    // });
  }
  // gamesListener = () => {
    // if ANY GAMES === 8 users {
      //print message "Game on at " + PARK + " on " + DAY + " at " + TIME
    // } else {
        // ERR HANDLING 
  // }

  // getUsers() {
  //   const firebaseUsers = firebase.database().ref().child("users");

  //   firebaseUsers.on('value', function(snapshot){
  //     firebaseUsers.innerText = snapshot.val();

  //     console.log(firebaseUsers.innerText, " this is the users in firebase")
  //   });
  // }

// <UserPage user={this.state.user} responses={this.state.responses}/>
  render() {
    return (
      <div className="App">
      <div className="bg">
        <h1 className="transbox"> Goaltimate Pickup</h1>
      </div>
      {this.state.user ? (<UserGameAvailability fName={this.state.fName} email={this.state.email} uid={this.state.uid} authListener={this.authListener} logOut={this.logOut}/>)  : (<LoginRegister newUserListener={this.newUserListener} />)}

      </div>
    );
  }
}

export default App;
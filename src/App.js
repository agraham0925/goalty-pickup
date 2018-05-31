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
      email: '',
      uid: '',
      phone: '',
      fName: '',
      lName: ''
    }
    // this.login = this.login.bind(this);
    // this.logout = this.logout.bind(this);
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({
          user,
          email: user.email,
          uid: user.uid
        });
        this.findUser()
        console.log(this.state.user, " this is user")
        console.log(this.state.user.email, " this is email")
        console.log(this.state.user.uid, " this is uid")
        console.log(this.state, " this is state")
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
          console.log(user, " found match - it worked!")
          console.log(this.state.phone, " this is phone")
          console.log(this.state.fName, " this is fname")
          console.log(this.state.lName, " this is lname")
          console.log(this.state, ' this is state after user info added')
        } else {
          console.log("nope")
        }
      })  
    });
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
      {this.state.user ? (<UserGameAvailability email={this.state.email} uid={this.state.uid} authListener={this.authListener} logOut={this.logOut}/>)  : (<LoginRegister />)}

      </div>
    );
  }
}

export default App;










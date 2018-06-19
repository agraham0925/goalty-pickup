import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';
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
      lName: '',
      password: '',
      buttonText: '',
      hideVote: false,
      // these fields for new user registrations
      emailR: '',
      passwordR: '',
      fNameR: '',
      lNameR: '',
      phoneR: '',
      message: ''
    }
  }
  //confirming if user is logged in
  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({
          user,
          email: user.email,
          uid: user.uid,
        });
        this.findUser()
      } else {
        this.setState({user: null});
      }
    });
  }

  componentDidMount() {
    this.authListener()
  }
  //used for login/registration
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  login = (e) => {
    e.preventDefault();

    //firebase user authentication to confirm user has account in app
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {  
    }).catch((err) => {
         console.log(err)
    });
  }

  logOut() {
    firebase.auth().signOut()
  }

  getUsers() {
    const firebaseUsers = firebase.database().ref().child("users");

    firebaseUsers.on('value', function(snapshot){
      firebaseUsers.innerText = snapshot.val();
      const users = firebaseUsers.innerText

      return users
    });
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
    //grabbing user information from database and setting in state
    firebase.database().ref('users').on('value', (snapshot) => {
      const userArr = [];

        const Firebase = snapshotToArray(snapshot).map((u) => {
          const user = u.key

          if(user === this.state.uid) {
            this.setState({
              phone: u.phone,
              fName: u.firstName,
              lName: u.lastName
            })
            // console.log(this.state, " this is state with user data")
          } else {

          console.log("nope")
        }
      })  
    });
  }

  btnToggle = () => {

    console.log('this button was clicked')
    if(this.state.hideVote === false) {
      this.setState({hideVote: true}) 
    } else {
      this.setState({hideVote: false})
    }

    console.log(this.state, " this is state when button clicked")
  }

  register = (e) => {
    e.preventDefault();

    //firebase createUser method
    firebase.auth().createUserWithEmailAndPassword(this.state.emailR, this.state.passwordR)
    .then((response) => {

      const userId = response.user.uid;

      this.setState({uid: userId})

    })
    //to record add'l user data separately
    .then(() => {
      this.writeUserData();
    })

    .catch((err) => {
      console.log(err);
    })
  }
  //to record add'l user data separately
  writeUserData = () => {

    //adding data to the users obj with the user auth key
    const firstName = this.state.fNameR;
    const lastName = this.state.lNameR;
    const phone = this.state.phoneR;

    const firebaseUsers = firebase.database().ref('users')

    firebaseUsers.update({
      [this.state.uid]: {
        firstName: firstName,
        lastName: lastName,
        phone: phone
      }
    });
  }

  displaySubmitMessage = () => {
    this.setState({message: "Your game availability has been added!"})
  }
  //listening for changes to users confirming game attendance
  childChangeListener = () => {
    const firebaseGames = firebase.database().ref('Games')

     //when a child is added, check to see the length of the child 
    firebaseGames.on('child_added', (snapshot) => {

      const users = [];
      
      const info = snapshot.val();

      console.log(info, ' this is info')
      console.log(snapshot.key, ' this is snapshot key')

      // users.push(info.users)
      // console.log(users, " this is  users array")

      //get the list of users for each game
      //find out if that games users list is at 9
      //if at 9, create notification that game is called
    })
  }

  render() {
    return (
      <div className="App">
      <div className="bg">
        <h1 className="transbox"> Goaltimate Pickup</h1>
      </div>
      {this.state.user ? (<UserGameAvailability hideVote={this.state.hideVote} btnToggle={this.btnToggle} getUsers={this.getUsers} message={this.state.message} displaySubmitMessage={this.displaySubmitMessage} childChangeListener={this.childChangeListener} fName={this.state.fName} email={this.state.email} uid={this.state.uid} authListener={this.authListener} logOut={this.logOut}/>)  : (<LoginRegister handleChange={this.handleChange} register={this.register} login={this.login} />)}

      </div>
    );
  }
}

export default App;
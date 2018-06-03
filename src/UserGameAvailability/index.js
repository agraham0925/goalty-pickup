import React, { Component} from 'react';
import firebase from '../firebase.js';
import Modal from '..Modal';

class UserGameAvailability extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firebaseGames: [],
			responses: [],
			hasKit: false,
			modalClass: 'closed'
		}
	}

	componentDidMount() {
		//retrieving game data from Firebase and storing in an array
    	function snapshotToArray(snapshot) {
    		const returnArr = [];

    		snapshot.forEach((childSnapshot) => {
    			const item = childSnapshot.val();

    			item.key = childSnapshot.key;

    			returnArr.push(item);
    		})
    		return returnArr
    	}

    	//getting each individual game in the Games object and storing in state
    	firebase.database().ref('Games').on('value', (snapshot) => {
    			const gamesArr = [];

    		const gamesFirebase = snapshotToArray(snapshot).map((gameFirebase) => {
    			const game = gameFirebase.key

    			gamesArr.push(game)
    			return gamesArr
    		})
   		
    		this.setState({firebaseGames: gamesArr})
		});

    	//creates new user
		this.props.newUserListener();

		// console.log(this.state, ' this is state')
	}

	checkItem = (e) => {
		//getting the value of the checkbox, which is listed as the specific game
		const park = e.currentTarget.value

		//adding each game that user is available to responses state
		this.state.responses.push(park)
	}
	hasKit = (e) => {

		//updates firebase to indicate user has equipment/kit
		firebase.database().ref('/users/' + this.props.uid).update({
			hasKit: true
		});
	}

	handleSubmit = (e, park) => {
		e.preventDefault();

		const firebaseDB = this.state.firebaseGames
		const userResponses = this.state.responses
		const currentUser = this.state.currentUser

		const data = {
			[this.props.fName]: true
		}

    	//adding game attendance to the database
		userResponses.forEach((parkName) => {
			const gamesRef = firebase.database().ref('Games');
			gamesRef.child(parkName).child('users').update(data)
		})
	}

	displayMessage = (e) => {
		// e.preventDefault();
		const message = "Your game availability has been added!"

		this.setState({message: message})
		console.log(this.state, " this is state with message")
	}

	showModal = () => {
		setState({
			modalClass: 'open'
		})

		console.log(this.state, " state showing modal")
	}

	hideModal = () => {
		setState({
			modalClass: 'closed'
		})

		console.log(this.state, " state hiding modal")
	}

	render() {
		return(
			<div>
				<Modal close={this.hideModal} modalClass={this.state.modalClass} />
				<button className="btn" onClick={this.props.logOut}>Log Out</button>
				<h3>Hi, {this.props.fName}</h3>
				<h4>Add your availability for pickup this weekend!</h4>
				<form onSubmit={this.handleSubmit}>
					<div>

						Revere Park:
							<input className="park-fields" type="checkbox" name="game" value="revere_1" onChange={this.checkItem} />
							<label for="revere_1"> Saturday 12pm </label>
							<input className="park-fields" type="checkbox" name="game" value="revere_2" onChange={this.checkItem} />
							<label for="revere_2"> Saturday 1pm </label>
							<input className="park-fields" type="checkbox" name="game" value="revere_3" onChange={this.checkItem} />
							<label for="revere_3"> Sunday 12pm </label>
							<input className="park-fields" type="checkbox" name="game" value="revere_4" onChange={this.checkItem} />
							<label for="revere_4"> Sunday 1pm </label>
						<br />

						Eckhart Park:
						<input className="park-fields" type="checkbox" name="game" value="eckhart_1" onChange={this.checkItem}/>
						<label for="eckhart_1"> Saturday 12pm </label>
						<input className="park-fields" type="checkbox" name="game" value="eckhart_2" onChange={this.checkItem}/>
						<label for="eckhart_2"> Saturday 1pm </label>
						<input className="park-fields" type="checkbox" name="game" value="eckhart_3" onChange={this.checkItem}/>
						<label for="eckhart_3"> Sunday 12pm </label>
						<input className="park-fields" type="checkbox" name="game" value="eckhart_4" onChange={this.checkItem}/>
						<label for="eckhart_4"> Sunday 1pm </label>
						<br />

						Humboldt Park:
						<input  className="park-fields" type="checkbox" name="game" value="humboldt_1" onChange={this.checkItem}/>
						<label for="humboldt_1"> Saturday 12pm </label>
						<input  className="park-fields" type="checkbox" name="game" value="humboldt_2" onChange={this.checkItem}/>
						<label for="humboldt_2"> Saturday 1pm </label>
						<input  className="park-fields" type="checkbox" name="game" value="humboldt_3" onChange={this.checkItem}/>
						<label for="humboldt_3"> Sunday 12pm </label>
						<input  className="park-fields" type="checkbox" name="game" value="humboldt_4" onChange={this.checkItem}/>
						<label for="humboldt_4"> Sunday 1pm </label>
					</div>

					<div>
						<input  className="park-fields" type="checkbox" name="has_kit" value="has_kit" onChange={this.hasKit}/>
						<label for="has_kit"> Check this box if you're able to bring a kit </label>
					</div>

					<div>
						<button onClick={this.displayMessage} className="btn" >Submit</button>
					</div>
				</form>
			</div>
		);
	}
} 

export default UserGameAvailability;
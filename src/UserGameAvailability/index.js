import React, { Component} from 'react';
import firebase from '../firebase.js';

class UserGameAvailability extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firebaseGames: [],
			responses: [],
			hasKit: false
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

		// this.props.authListener();

		// console.log(this.state, ' this is state')
	}

	checkItem = (e) => {
		//getting the value of the checkbox, which is listed as the specific game
		const park = e.currentTarget.value

		//adding each game that user is available to responses state
		this.state.responses.push(park)
	}
	hasKit = (e) => {

		this.setState({hasKit: true})
		console.log(this.state, " this is now state")

		//need to update user DB info to indicate that they have a kit
	}

	handleSubmit = (e, park) => {
		e.preventDefault();

		const firebaseDB = this.state.firebaseGames
		const userResponses = this.state.responses
		const currentUser = this.state.currentUser

		const data = {
    		users: {
    			[this.props.email]: true
    		}
    	}

    	//adding game attendance to the database
		userResponses.forEach((parkName) => {
			const gamesRef = firebase.database().ref('Games');
			gamesRef.child(parkName).update(data)
		})
	}

	render() {
		return(
			<div>
				<button className="btn">Update User Info</button>
				<button className="btn" onClick={this.props.logOut}>Log Out </button>
				<h3>Hi, {this.props.fName}</h3>
				<h4>Add your availability for pickup this weekend!</h4>
				<form onSubmit={this.handleSubmit}>
					<div>
						Revere Park:
							<input type="checkbox" name="game" value="revere_1" onChange={this.checkItem} />
							<label for="revere_1"> Saturday 12pm </label>
							<input type="checkbox" name="game" value="revere_2" onChange={this.checkItem} />
							<label for="revere_2"> Saturday 1pm </label>
							<input type="checkbox" name="game" value="revere_3" onChange={this.checkItem} />
							<label for="revere_3"> Sunday 12pm </label>
							<input type="checkbox" name="game" value="revere_4" onChange={this.checkItem} />
							<label for="revere_4"> Sunday 1pm </label>
						<br />
						Eckhart Park:
						<input type="checkbox" name="game" value="eckhart_1" onChange={this.checkItem}/>
						<label for="eckhart_1"> Saturday 12pm </label>
						<input type="checkbox" name="game" value="eckhart_2" onChange={this.checkItem}/>
						<label for="eckhart_2"> Saturday 1pm </label>
						<input type="checkbox" name="game" value="eckhart_3" onChange={this.checkItem}/>
						<label for="eckhart_3"> Sunday 12pm </label>
						<input type="checkbox" name="game" value="eckhart_4" onChange={this.checkItem}/>
						<label for="eckhart_4"> Sunday 1pm </label>
			
						<br />
						Humboldt Park:
						<input type="checkbox" name="game" value="humboldt_1" onChange={this.checkItem}/>
						<label for="humboldt_1"> Saturday 12pm </label>
						<input type="checkbox" name="game" value="humboldt_2" onChange={this.checkItem}/>
						<label for="humboldt_2"> Saturday 1pm </label>
						<input type="checkbox" name="game" value="humboldt_3" onChange={this.checkItem}/>
						<label for="humboldt_3"> Sunday 12pm </label>
						<input type="checkbox" name="game" value="humboldt_4" onChange={this.checkItem}/>
						<label for="humboldt_4"> Sunday 1pm </label>
					</div>
					<div>
						<input type="checkbox" name="has_kit" value="has_kit" onChange={this.hasKit}/>
						<label for="has_kit"> Check this box if you're able to bring a kit </label>
					</div>
					<div>
						<button className="btn" >Submit</button>
					</div>
				</form>
			</div>
		);
	}
} 

export default UserGameAvailability;
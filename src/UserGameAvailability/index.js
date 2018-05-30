import React, { Component} from 'react';
import firebase from '../firebase.js';

class UserGameAvailability extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: 'mace',
			firebaseGames: [],
			responses: []
		}
		this.checkItem = this.checkItem.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
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

		// console.log(this.state, ' this is state')
	}

	checkItem(e) {
		//getting the value of the checkbox, which is listed as the specific game
		const park = e.currentTarget.value

		//adding each game that user is available to responses state
		this.state.responses.push(park)

		// console.log(park, " this is value from checkItem")
		// console.log(this.state.responses, " this is the state of responses")
	}

	handleSubmit(e, park){
		e.preventDefault();

    	//getting each game in the responses array
  //   	const games = this.state.responses.map((game) => {
  //   		console.log(game, " this is game")
  //   		return game
		// })

		const firebaseDB = this.state.firebaseGames
		const userResponses = this.state.responses

		// console.log(firebaseDB, ' this is firebaseDB')
		// console.log(userResponses, ' this is userResponses')



		// const filteredArr = firebaseDB.filter((game) => userResponses.includes(game));
		// console.log(filteredArr, " this is filteredArr")

		//connect to database
    	// const gamesRef = firebase.database().ref('Games/');

		// get each game on it's own

    	//
    	// const data = {
    	// 	users: {
    	// 		this.state.user: true
    	// 	}
    	// }
    	
    	// const game = {

    	// }

    	//add user: true data to each game
		// gamesRef.child(gameId).update(data)

	}

	render() {
		return(
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
					<button>Submit</button>
				</div>
			</form>
		);
	}
} 

export default UserGameAvailability;
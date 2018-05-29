import React, { Component} from 'react';
import firebase from '../firebase.js';

class UserGameAvailability extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: 'mace',
			responses: []
		}
		this.checkItem = this.checkItem.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
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

		// const gamesRef = firebase.database().ref('Games');

		// gamesRef.on('value', function(snapshot){
  //     		gamesRef.innerText = snapshot.val();

  //     		return gamesRef.innerText
  //     		// console.log(gamesRef.innerText, " this is the gamesRef in firebase")
  //   	});

  		//retrieving game data from Firebase and storing in an array
    	function snapshotToArray(snapshot) {
    		const returnArr = [];

    		snapshot.forEach(function(childSnapshot) {
    			const item = childSnapshot.val();

    			item.key = childSnapshot.key;

    			returnArr.push(item);
    		})
			console.log(returnArr, " this is returnArr")
    		return returnArr

    	}

    	//getting each individual game in the Games object
    	firebase.database().ref('Games').on('value', function(snapshot) {
    		// console.log(snapshotToArray(snapshot), ' this is snapshotToArray');

    		const gamesFirebase = snapshotToArray(snapshot).map((gameFirebase) => {
    			console.log(gameFirebase.key, " this is snapshot key")
    			return gameFirebase.key
    		})
		});

    	//getting each game in the responses array
    	const games = this.state.responses.map((game) => {
    		return game
		})

    	//IN PROGRESS - the below does not work. above each item is returned, but 
    	//still working on trying to compare the two arrays
		if(games === gamesFirebase) {
			console.log(games + ' and ' + gamesFirebase + " are the same game")
		} else {
    		console.log("game not found")
    	}
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
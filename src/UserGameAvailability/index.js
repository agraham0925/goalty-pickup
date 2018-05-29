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

		//add responses that are saved in state to the database

		//users.responses

		//games

		const gamesRef = firebase.database().ref('Games');

		gamesRef.on('value', function(snapshot){
      		gamesRef.innerText = snapshot.val();

      		return gamesRef.innerText
      		// console.log(gamesRef.innerText, " this is the gamesRef in firebase")
    	});

    	function snapshotToArray(snapshot) {
    		const returnArr = [];

    		snapshot.forEach(function(childSnapshot) {
    			const item = childSnapshot.val();

    			item.key = childSnapshot.key;

    			returnArr.push(item);
    		})

    		return returnArr
    	}

    	firebase.database().ref('Games').on('value', function(snapshot) {
    		console.log(snapshotToArray(snapshot), ' this is snapshotToArray');

    		snapshotToArray(snapshot).map((gameFirebase) => {
    			console.log(gameFirebase.key, " this is snapshot key")
    		})
		});

    	// const gamesFirebase = gamesRef.map((gameFirebase) => {
    	// 	console.log(gameFirebase, " this is gameFirebase")
    	// })

  //   	const games = this.state.responses.map((game) => {
  //   		console.log(game, " this is game")
  //   		console.log(gamesRef, " this is gamesRef")
  //   		if(game === gamesRef.innerText) {
  //   			console.log(game + ' and ' + gamesRef.innerText + " are the same game")
  //   		} else {
  //   			console.log("game not found")
  //   		}
		// })

		// console.log(games, " this is games")
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
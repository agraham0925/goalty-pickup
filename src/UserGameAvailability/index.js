import React, { Component} from 'react';
// import firebase from '../firebase.js';

class UserGameAvailability extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: '',
			responses: []
		}
	}

	handleSubmit(e){
		e.preventDefault();

		console.log(e.currentTarget.input, " this is e.currentTarget.input")

		// if( == "on"){
		// 	games.SOMETHING.USER = true;
		// } else games.SOMETHING.USER = false;

		
  //   		{
  //       		console.log("Checkbox with name = " + oCheckbox.name + " and value =" +
  //               checkbox_val + " is checked");
  //   		}
  //   		else
  //   		{
  //       		console.log("Checkbox with name = " + oCheckbox.name + " and value =" +
  //             	checkbox_val + " is not checked");
  //   		}
		// }


		// const gamesDB = firebase.database().ref('games');
		// const game = {

		// }

		//if box checked add user name to game.users object
		//add all responses T/F to users.responses
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<div>
					Revere Park:
						<input type="checkbox" name="game" value="revere_1" />
						<label for="revere_1"> Saturday 12pm </label>
						<input type="checkbox" name="game" value="revere_2" />
						<label for="revere_2"> Saturday 1pm </label>
						<input type="checkbox" name="game" value="revere_3" />
						<label for="revere_3"> Sunday 12pm </label>
						<input type="checkbox" name="game" value="revere_4" />
						<label for="revere_4"> Sunday 1pm </label>
					<br />
					Eckhart Park:
					<input type="checkbox" name="game" value="eckhart_1" />
					<label for="eckhart_1"> Saturday 12pm </label>
					<input type="checkbox" name="game" value="eckhart_2" />
					<label for="eckhart_2"> Saturday 1pm </label>
					<input type="checkbox" name="game" value="eckhart_3" />
					<label for="eckhart_3"> Sunday 12pm </label>
					<input type="checkbox" name="game" value="eckhart_4" />
					<label for="eckhart_4"> Sunday 1pm </label>
		
					<br />
					Humboldt Park:
					<input type="checkbox" name="game" value="humboldt_1"/>
					<label for="humboldt_1"> Saturday 12pm </label>
					<input type="checkbox" name="game" value="humboldt_2"/>
					<label for="humboldt_2"> Satugamerday 1pm </label>
					<input type="checkbox" name="" value="humboldt_3"/>
					<label for="humboldt_3"> Sunday 12pm </label>
					<input type="checkbox" name="game" value="humboldt_4"/>
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
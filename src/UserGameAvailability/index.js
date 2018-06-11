import React, { Component} from 'react';
import firebase from '../firebase.js';
import DisplayWeather from '../DisplayWeather';

class UserGameAvailability extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firebaseGames: [],
			responses: [],
			hasKit: false,
			weatherForecast: []
		}
	}

	componentDidMount() {
		//retrieving game data from Firebase and storing in an arr
    	function snapshotToArray(snapshot) {
    		const returnArr = [];

    		snapshot.forEach((childSnapshot) => {
    			const item = childSnapshot.val();

    			item.key = childSnapshot.key;

    			returnArr.push(item);
    		})
    		return returnArr
    	}

    	//getting each individual game in the Games object in Firebase and storing in state arr
    	firebase.database().ref('Games').on('value', (snapshot) => {
    			const gamesArr = [];

    		const gamesFirebase = snapshotToArray(snapshot).map((gameFirebase) => {
    			const game = gameFirebase.key

    			gamesArr.push(game)
    			return gamesArr
    		})
   		
    		this.setState({firebaseGames: gamesArr})
		});

    	//calls getUsers and creates new user if doesn't exist in database
		// this.props.newUserListener();

		this.getWeather();
	}

	getWeather = async () => {
      //apiKey
      const apiKey = '4b832f98ae124dffb64201827180306';

      //make request to weather api
      const responseJSON = await fetch('https://api.apixu.com/v1/forecast.json?key=' + apiKey + '&q=Chicago&days=7',{
      });

      const response = await responseJSON.json();

      const weatherForecast = response.forecast.forecastday

      this.setState({weatherForecast: weatherForecast})
      // console.log(this.state, " this is state with weatherForecast")
  	}

	checkItem = (e) => {

		const responses = this.state.responses
		const park = e.currentTarget.value

		//index value of park in responses arr
		const index = responses.indexOf(park)

		//adding/removing parks in responses arr in state
		if(responses.includes(park)) {
			this.state.responses.splice(index, 1)
		} else {
			this.state.responses.push(park)
		}	
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

		this.props.displaySubmitMessage();
	}
	render() {
		return(
			<div>
				<button className="btn" onClick={this.props.logOut}>Log Out</button>
				<h3>Hi, {this.props.fName}</h3>
				<h4>Add your availability for pickup this weekend!</h4>
				<h4>Forecasted Weather:</h4>
				<DisplayWeather weatherForecast={this.state.weatherForecast}/>

				{ this.props.message ? "You're game availability has been added!" :

					<form onSubmit={this.handleSubmit}>
						<div>
	
							<p>Revere Park:</p>
								<input className="park-fields" type="checkbox" name="game" value="revere_1" onChange={this.checkItem} />
								<label for="revere_1"> Saturday 12pm </label>
								<input className="park-fields" type="checkbox" name="game" value="revere_2" onChange={this.checkItem} />
								<label for="revere_2"> Saturday 1pm </label>
								<input className="park-fields" type="checkbox" name="game" value="revere_3" onChange={this.checkItem} />
								<label for="revere_3"> Sunday 12pm </label>
								<input className="park-fields" type="checkbox" name="game" value="revere_4" onChange={this.checkItem} />
								<label for="revere_4"> Sunday 1pm </label>
							<br />
	
							<p>Eckhart Park:</p>
							<input className="park-fields" type="checkbox" name="game" value="eckhart_1" onChange={this.checkItem}/>
							<label for="eckhart_1"> Saturday 12pm </label>
							<input className="park-fields" type="checkbox" name="game" value="eckhart_2" onChange={this.checkItem}/>
							<label for="eckhart_2"> Saturday 1pm </label>
							<input className="park-fields" type="checkbox" name="game" value="eckhart_3" onChange={this.checkItem}/>
							<label for="eckhart_3"> Sunday 12pm </label>
							<input className="park-fields" type="checkbox" name="game" value="eckhart_4" onChange={this.checkItem}/>
							<label for="eckhart_4"> Sunday 1pm </label>
							<br />
	
							<p>Humboldt Park:</p>
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
							<button className="btn" >Submit</button>
						</div>
					</form>

				}
				
			</div>
		);
	}
} 

export default UserGameAvailability;
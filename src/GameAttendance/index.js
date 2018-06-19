import React, { Component } from 'react';

const GameAttendance = ({btnToggle}) => {
	
	// const gamesRef = firebase.database().ref('Games');
	// gamesRef.child(parkName).child('users').update(data)
	

	// const userAttendance = .map((, i) => {
	// 	return (
	// 		<div>
	// 			<li>
						
	// 			</li>
	// 		</div>
	// })

	return (
		<div>
			<h1> hello </h1>
			<button className="btn" onClick={btnToggle}>Add your game availability</button>
		</div>
	)
}

export default GameAttendance;
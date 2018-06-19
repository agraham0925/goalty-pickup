import React, { Component } from 'react';

const GameAttendance = () => {
	
	const gamesRef = firebase.database().ref('Games');
	gamesRef.child(parkName).child('users').update(data)
	

	const userAttendance = .map((, i) => {
		return (
			<div>
				<li>
						
				</li>
			</div>
	})

	return (
		<ul> {userAttendance}</ul>
	)
}

export default GameAttendance;
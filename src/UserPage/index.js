import React from 'react';
import firebase from '../firebase.js';

function UserPage(props) {
	// console.log(props, " this is props")
	return(
		<div>
			<div>
				<h1> Hi, {props.user} </h1>
				<button> Update Info </button>
				<button> Logout </button>
			</div>

			<div>
				
			</div>
		</div>
	);
} 

export default UserPage;
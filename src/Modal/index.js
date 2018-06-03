import React from 'react';
import './style.css';
import UserGameAvailability from '../UserGameAvailability';

function Modal(props) {
	return (
		<div>
			<div className="modal">
				
				<button className="modal-btn" onClick={this.props.close}> close </button>
			</div>
		</div>
	)
}

export default Modal;
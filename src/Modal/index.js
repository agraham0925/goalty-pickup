import React from 'react';
import './style.css';

function Modal() {
	return (
		<div className={this.props.cssClass}>
			<div className="modal">
				{comp}
				<button className="modal-btn" onClick={this.props.close}> close </button>
			</div>
		</div>
	)
}

export default Modal;
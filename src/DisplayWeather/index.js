import React, { Component } from 'react';
import './style.css';

const DisplayWeather = ({weatherForecast}) => {
	const weatherList = weatherForecast.map((day, i) => {
		return (
			<li>
				{day.date}
			</li>
		)
	})

	return (
		<h3> {weatherList}</h3>
	)
}

export default DisplayWeather;
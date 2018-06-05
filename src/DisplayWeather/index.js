import React, { Component } from 'react';
import './style.css';

const DisplayWeather = ({weatherForecast}) => {
	const weatherList = weatherForecast.map((day, i) => {
		return (
			<li className="weather" >
				Date: {day.date} <br />
				Max Temp: {day.day.maxtemp_f} <br />
				Humidity: {day.day.avghumidity}% <br />
			</li>
		)
	})

	return (
		<ul className="weatherContainer"> {weatherList}</ul>
	)
}

export default DisplayWeather;
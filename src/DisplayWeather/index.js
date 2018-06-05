import React, { Component } from 'react';
import './style.css';

const DisplayWeather = ({weatherForecast}) => {
	const weatherList = weatherForecast.map((day, i) => {

		const theDay = day.date

		// let day1 = theDay.getDay();

		const splitDay = theDay.split('-')

		console.log(splitDay, " this is splitDay")

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
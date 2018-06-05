import React, { Component } from 'react';
import './style.css';

const DisplayWeather = ({weatherForecast}) => {
	const weatherList = weatherForecast.map((day, i) => {
		
		//grabbing date property from api call
		const theDay = day.date

		//takes date from API and changes to readable format with timestamp
		const upDate = new Date(theDay)

		//removes the timestamp
		const textDate = upDate.toDateString()

		return (
			<li className="weather" >
				{textDate} <br />
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
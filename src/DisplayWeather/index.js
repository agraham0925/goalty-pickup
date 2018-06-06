import React, { Component } from 'react';
import './style.css';

const DisplayWeather = ({weatherForecast}) => {
	const weatherList = weatherForecast.map((day, i) => {

		//grabbing date property from api call
		const theDay = day.date

		//takes date from API and changes to readable format with timestamp
		const upDate = new Date(theDay)

		//returns day of the week with 0-6 (sun-sat)
		const findDay = upDate.getDay();

		//removes the timestamp
		const textDate = upDate.toDateString()

		//returning only information for Sunday and Saturday
		if(findDay === 0 || findDay === 6) {
			return (
				<div>
					<li className="weather" >
						{textDate} <br />
						Max Temp: {day.day.maxtemp_f} <br />
						Humidity: {day.day.avghumidity}% <br />
						{day.day.condition.text}
					</li>
				</div>
				
			)
		} else {
			
		}
	})

	return (
		<ul className="weatherContainer"> {weatherList}</ul>
	)
}

export default DisplayWeather;
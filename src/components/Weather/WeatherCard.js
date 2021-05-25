import React from 'react'

export default function WeatherCard (props) {
  return (
        <div className="weatherBoxnpm">
            {props.weatherData.location
              ? (
                <div className="row">
                    <div className="col weatherText">
                        <h1>{props.weatherData.location}</h1>
                        <h2>{props.weatherData.temperature}<sup>o</sup>C , {props.weatherData.description}</h2>
                        <h3>{props.weatherData.region}, {props.weatherData.country} </h3>
                        <h4>luchtvochtigheid: {props.weatherData.humidity}%</h4>

                    </div>
                    <div className="col">
                        <img className="weather-image" src={props.weatherData.img} alt="weather-img"/>
                    </div>
                </div>
                )
              : (
                <span>Je hebt ons de toegang tot het raadplegen van jouw (geo) locatie geweigerd. Om de weersvoorspelling van jouw locatie automatisch op het scherm te kunnen zien willen wij je vragen om ons toestemming te geven om jouw (geo) locatie op te halen.</span>
                )}
        </div>
  )
}

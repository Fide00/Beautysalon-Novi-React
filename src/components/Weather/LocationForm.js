import React from 'react'

export default function LocationForm (props) {
  return (
        <div>
            <form className="location-form" id="locationForm" onSubmit={(e) => props.changeWeather(e)}>
                <input className="location-input" placeholder="Voer een locatie in" onChange={(e) => props.changeLocation(e.target.value)} />
            </form>
            <button className="searchButton" type="submit" form="locationForm" value="Zoek">Zoek</button>
        </div>
  )
}

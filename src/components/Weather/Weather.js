import '../App/App.css'
import './Weather.css'
import React from 'react'
import Axios from 'axios'
import LocationForm from './LocationForm'
import WeatherCard from './WeatherCard'

class Weather extends React.Component {
  // State
   state = {
     coords: {
       latitude: 52.117471,
       longitude: 5.039224
     },
     data: {},
     inputData: ''
   }

   componentDidMount () {
     // Haal huidige geolocatie positie op
     navigator.geolocation.getCurrentPosition((position) => {
       const newCoords = {
         latitude: position.coords.latitude,
         longitude: position.coords.longitude
       }

       this.setState({ coords: newCoords })

       // Api GET verzoek naar weatherstack om de weer gegevens van de huidige geolocatie op te halen
       Axios.get(`http://api.weatherstack.com/current?access_key=6be8fe4045cda7389521a2ef6addf964&query=${this.state.coords.latitude},${this.state.coords.longitude}`).then(res => {
         const apiData = {
           location: res.data.location.name,
           temperature: res.data.current.temperature,
           description: res.data.current.weather_descriptions[0],
           region: res.data.location.region,
           country: res.data.location.country,
           humidity: res.data.current.humidity,
           img: res.data.current.weather_icons
         }

         this.setState({ data: apiData })
       })
     })
   }

    // Invoerveld van stad bijhouden
    change = (value) => {
      this.setState({ inputData: value })
    }

    changeWeather = (event) => {
      event.preventDefault()

      // Api GET verzoek naar weatherstack om de weer gegevens van de ingevoerde stad op te halen
      Axios.get(`http://api.weatherstack.com/current?access_key=6be8fe4045cda7389521a2ef6addf964&query=${this.state.inputData}`).then(res => {
        // Indien 'current' niet voorkomt in de response, dan aangeven dat stad niet gevonden is
        if (!res.data.current) {
          alert('Stad niet gevonden!')
          return
        }

        const apiData = {
          // Gegevens uit de API response
          location: res.data.location.name,
          temperature: res.data.current.temperature,
          description: res.data.current.weather_descriptions[0],
          region: res.data.location.region,
          country: res.data.location.country,
          humidity: res.data.current.humidity,
          img: res.data.current.weather_icons
        }

        this.setState({ data: apiData })
      })
    }

    render () {
      return (
            <section>
                {/* Box-container */}
                <div className="grid-container">

                    {/* Box 3: Content */}
                    <div className="grid-box3">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="page-title"> Weersvoorspelling voor vandaag</div>
                                    <LocationForm changeWeather={this.changeWeather} changeLocation={this.change} />
                                </div>
                            </div>
                            <WeatherCard weatherData={this.state.data} />
                        </div>
                    </div>
                </div>
            </section>
      )
    }
}

export default Weather

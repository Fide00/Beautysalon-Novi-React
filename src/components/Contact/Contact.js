import '../App/App.css'
import './Contact.css'
import React from 'react'
import ContactAdress from '../../json/ContactAdress.json'
import ContactOpenHours from '../../json/ContactOpenHours.json'
import GoogleMapReact from 'google-map-react'

class Contact extends React.Component {
    static defaultProps = {
      center: {
        lat: 52.117471,
        lng: 5.039224
      },
      zoom: 17
    };

    render () {
      return (
            <section className="contact">
                {/* Box-container */}
                 <div className="grid-container">

                    {/* Box 3: Content */}
                    <div className="grid-box3">
                        <div className="page-title"> Contact</div>

                        {/* Adresgegevens vanuit json file "ContactAdress" worden hier getoond */}
                           <div className="content">
                               {ContactAdress.map(address => {
                                 return (
                                    <div key={address.telefoon}>
                                           {/* content informatie */}
                                         <p>{address.content} <br/></p>

                                        {/* Adress informatie */}
                                         <div className="label">Adres</div>
                                              {address.straat} {' '}<br/>
                                            {address.postcode} {' '}<br/>
                                         {address.plaats} {' '}<br/>
                                        {address.telefoon} {' '}<br/>
                                        {address.emailadres} {' '}<br/>
                                    </div>
                                 )
                               })}
                        </div>

                        {/* Openingstijden vanuit json file "ContactOpenHours" worden hier getoond */}
                        <div className="label">Openingstijden</div>
                        <div className="content">
                            {ContactOpenHours.map(contact => {
                              return (
                                    <div key={contact.day}>
                                        {contact.day}: {' '}
                                        {contact.time} <br/>
                                    </div>
                              )
                            })}
                        </div>
                        <br/>

                        {/* Google Maps */}
                        <div className="contact-google-map">
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: 'AIzaSyDFJN8KsV0vonVDnuMQg39pedzZxhh7rVs' }}
                                defaultCenter={this.props.center}
                                defaultZoom={this.props.zoom}
                            >
                            </GoogleMapReact>
                        </div>
                    </div>
                </div>
            </section>
      )
    }
}

export default Contact

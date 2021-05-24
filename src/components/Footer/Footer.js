import '../App/App.css';
import './Footer.css';
import React from 'react';
import ContactAdress from "../../json/ContactAdress.json";
import ContactOpenHours from "../../json/ContactOpenHours.json";

function Footer() {
    return (
        <footer>
            <div className="App">
                {/*Box-container*/}
                <div className="grid-container">

                    {/*Box 4: footer adres*/}
                    <div className="grid-box4">
                        <div className="label">Adres</div>
                        <div className="content">
                            {ContactAdress.map(address => {
                                return (
                                    <div key={address.telefoon}>
                                        {address.straat} {" "}<br/>
                                        {address.postcode} {" "}<br/>
                                        {address.plaats} {" "}<br/>
                                        {address.telefoon} {" "}<br/>
                                        {address.emailadres}{" "}<br/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/*Box 5: footer: openingstijden*/}
                    <div className="grid-box5">
                        <div className="label">Openingstijden</div>
                        <div className="content">
                            {ContactOpenHours.map(contact => {
                                return (
                                    <div key={contact.day}>
                                        {contact.day}: {" "}
                                        {contact.time}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

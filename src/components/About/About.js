import '../App/App.css'
import './About.css'
import React from 'react'
import aboutNovi from '../../assets/images/aboutNovi.png'

function About () {
  return (
        <section>
            {/* Box-container */}
            <div className="grid-container">

                {/* Box 3: Content */}
                <div className="grid-box3">
                    <div className="content">
                        <div className="page-title"> Over mij</div>
                        <div className="content">
                            Mijn naam is Fide Alassi en als studente heb ik in opdracht van Hogeschool Novi deze
                            opdracht
                            ten behoeve van de leerlijn Front End ontwikkeld.
                        </div>
                        <br/>
                    </div>

                    {/* Foto */}
                    <img className="photo-about" src={aboutNovi} alt="beautysalon"/>
                </div>

            </div>
        </section>
  )
}

export default About

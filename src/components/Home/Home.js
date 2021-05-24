import '../App/App.css';
import './Home.css';
import React from 'react';
import home_beauty from '../../assets/images/home_beauty.jpg';

function Home() {
    return (
        <section className="home">
            {/*Box-container*/}
            <div className="grid-container">

                {/*Box 3: Content*/}
                <div className="grid-box3">

                    <div className="page-title"> Welkom</div>
                    <div className="content">
                        Bij de Beautysalon Novi kunt u terecht voor verschillende uitgebreide behandelingen op het
                        gebied
                        van huidverzorging. <br/>
                        Ook verkopen wij diverse verzorgende producten. Maak een afspraak voor een vrijblijvend
                        gesprek. <br/>
                        Wij kunnen u tijdens de afspraak adivseren aan de hand van huidanalyse en uw wensen.<br/>
                        <br/>
                    </div>
                    {/*Foto*/}
                    <img className="photo-home" src={home_beauty} alt="beautysalon"/>

                </div>
            </div>
        </section>
    );
}

export default Home;

import '../App/App.css'
import './Header.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'

function Header () {
  // Uitlog functie
  const Logout = () => {
    // Verwijder de account data uit de local storage
    localStorage.removeItem('account')

    // Herlaad de pagina
    window.location.reload()
  }

  return (
        <header>
            <nav>
                <ul className="navbar-left">
                    {/* Navigatie: logo */}
                    <img src={Logo} alt="Logo"/>

                    <Link to='/home'>
                        <li>Startpagina</li>
                    </Link>

                    <Link to='/about'>
                        <li>Over mij</li>
                    </Link>

                    <Link to='/weather'>
                        <li>Weer</li>
                    </Link>

                    <Link to='/treatments'>
                        <li>Behandelingen</li>
                    </Link>

                    <Link to='/contact'>
                        <li>Contact</li>
                    </Link>

                    {/* Als er ingelogd is, dan kassa tonen en anders niet */}
                    { localStorage.getItem('account')
                      ? <Link to='/calculator'>
                            <li>Kassa</li>
                        </Link>
                      : null
                    }

                    {/* Als er ingelogd is, dan uitloggen tonen en anders inloggen */}

                    { localStorage.getItem('account')
                      ? <Link to="/" className="button" type="button" onClick={Logout}>Uitloggen</Link>
                      : <Link to="/login" className="button" type="button">Inloggen</Link>
                    }

                </ul>
            </nav>

            {/* Box-container */}
            <div className="grid-container">

                {/* Box 1: Header left: Welkom */}
                <div className="grid-box1">
                    <div className="navbar-right-title">
                        Welkom bij Beautysalon Novi
                    </div>

                    <div className="navbar-label">
                        Uw adres voor professionele schoonheidsbehandelingen!
                    </div>

                </div>

                {/* Box 2: Header right: Afspraak */}
                <div className="grid-box2">
                    <div className="navbar-label">
                        Afspraak maken
                    </div>

                    <Link to="/contact" className="button" type="button">Afspraak</Link>
                </div>
            </div>
        </header>
  )
}

export default Header

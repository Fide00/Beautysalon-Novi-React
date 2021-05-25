import '../App/App.css'
import './Login.css'
import React, { useState } from 'react'
import LoginForm from './LoginForm'
import { useHistory } from 'react-router-dom'

function Login () {
  const history = useHistory()

  // Inloggegevens gebruiker
  const adminUser = {
    email: 'medewerker@beautysalon.nl',
    password: 'banana'
  }

  // States van gebruiker & error
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState({ email: '' })
  const [error, setError] = useState('')

  // Authenticeer de binnenkomende details
  const Authenticate = details => {
    if (details.email === adminUser.email && details.password === adminUser.password) {
      setUser({
        email: details.email
      })

      // Redirect naar de kassa
      history.push('/Calculator')

      // Herlaad de pagina
      window.location.reload()

      // Zet de account data in de local storage
      localStorage.setItem('account', JSON.stringify(details))
    } else {
      setError('Ingevoerde gebruikersnaam/en of wachtwoord is onjuist.')
    }
  }

  // Weergeven op de pagina:
  return (
        <section className="login">
            {/* Box-container */}
            <div className="grid-container">
                {/* Box 3: Content */}
                <div className="grid-box3">
                    <h1>Inloggen</h1>

                    <div className="Login">
                        <LoginForm Authenticate={Authenticate} error={error}/>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Login

import React, { useState } from 'react'

function LoginForm ({ Authenticate, error }) {
  // State met daarin de details van het account
  const [details, setDetails] = useState({ email: '', password: '' })

  const submitHandler = e => {
    // Blokkeer de normale gedrag van een form (redirection)
    e.preventDefault()

    // Probeer te authenticeren met de ingevulde gegevens
    Authenticate(details)
  }

  return (
        // De Login form
        <form onSubmit={submitHandler}>
            <div className="login-error">
                {error}
            </div>
            <div className="form-inner">
                {/* Veld Email */}
                <div className="form-group">
             <div className="label">Emailadres</div>
                    <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email}/>
                </div>

                {/* Veld Password */}
                <div className="form-group">
                    <div className="label">Wachtwoord</div>
                    <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password}/>
                </div>
                <input type="submit" className="button-login" value="Inloggen" />
                </div>
        </form>
  )
}

export default LoginForm

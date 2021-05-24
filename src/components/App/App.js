import './App.css';
import React from 'react';
import Home from "../Home/Home";
import About from "../About/About";
import Treatments from "../Treatments/Treatments";
import Contact from "../Contact/Contact";
import Calculator from "../Calculator/Calculator";
import Login from "../Login/Login";
import Weather from '../Weather/Weather';
import Layout from '../Layout/Layout';

import  {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Layout>
                    <Switch>
                        {/*Open bij het opstarten van de site direct de startpagina */}
                        <Route path="/" exact component={Home}/>

                        {/*Navigeer naar de volgende pagina's*/}
                        <Route path="/home" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/weather" component={Weather}/>
                        <Route path="/treatments" component={Treatments}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/login" component={Login}/>

                        {/*Een private route voor Calculator/kassasysteem, enkel toegankelijk voor ingelogde gebruikers's*/}
                        <AuthenticatedRoute path="/calculator" component={Calculator}/>
                    </Switch>
                </Layout>
            </div>
        </Router>
    );
}

// Een wrapper voor <Route> dat je naar de homepagina redirect als je niet ingelogd bent.
function AuthenticatedRoute({ component: Component, ...rest }) {
    const isLoggedIn = localStorage.getItem("account");

    return (
        <Route
            {...rest}
            render={props =>
                isLoggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/Home",
                            state: {from: props.location}
                        }}
                    />
                )
            }
        />
    )
}

export default App;

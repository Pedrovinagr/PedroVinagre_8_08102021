import '../styles/Home.css'
import '../styles/Cards.css'
import '../styles/Logement.css'

import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './Home';
import Propos from './Propos'
import Logement from './Logement'


class App extends React.Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component= {Home} />
                    <Route exact path="/Propos" component= {Propos} />
                    <Route path="/logement/:id" component= {Logement} />
                </Switch>
            </div>
        );
    }
    
}

export default App;
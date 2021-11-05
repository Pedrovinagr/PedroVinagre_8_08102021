import React from 'react';
import { Switch, Route } from 'react-router-dom'


import Home from './Home';
import Propos from './Propos'

class App extends React.Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/Propos">
                        <Propos />
                    </Route>
                </Switch>
            </div>
        );
    }
    
}

export default App;
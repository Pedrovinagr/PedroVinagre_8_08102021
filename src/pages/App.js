import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Banner from '../components/Banner';

import Home from './Home';
import Propos from './Propos'

class App extends React.Component {

    render() {
        return (
            <div>
                <Switch>
                    <Banner />
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
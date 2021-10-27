import React from 'react';
import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

import logements from '../Data/logements.json'
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {logement: logements.find(pictures => pictures.id === this.props.match.id("c67ab8a7"))}
    }

    render() {
        return (
            <div>
                < Banner />
                <Carousel picture = {this.state.logement.pictures} />
                < Footer />
            </div>
        );
    }
    
}

export default App;
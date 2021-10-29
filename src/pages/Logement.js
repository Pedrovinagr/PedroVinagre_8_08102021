import React from 'react';
import '../styles/Logement.css'

import Banner from '../components/Banner';
// import Carousel from '../components/Carousel';
import Dropdown from '../components/Dropdown'
import Footer from '../components/Footer';

// import logements from '../Data/logements.json'

// const Logements = require("../Data/logements.json");

class App extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.State({logement: logements.find(picture => picture.id ("c67ab8a7"))})
    //     console.log(this.state.logement)
    // }

    render() {
        return (
            <div>
                < Banner />
                {/* <Carousel picture = {this.state.logement.cover} /> */}
                <div>
                    < Dropdown />
                    < Dropdown />
                </div>

                < Footer />
            </div>
        );
    }
    
}

export default App;
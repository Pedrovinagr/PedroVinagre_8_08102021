import React from 'react';
import '../styles/Logement.css'

import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import Dropdown from '../components/Dropdown'
import Footer from '../components/Footer';

// import logements from '../Data/logements.json'
const Logements = require("../Data/logements.json");
class App extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state = {logement: Logements.find(pictures => pictures.id === this.props.match.id('c67ab8a7'))}
    // }

    render() {
        const Data = Logements.find(pictures => pictures.id === "c67ab8a7");
        const PictureData = Data.pictures;

        return (
            <div>
                < Banner />
                <Carousel picture = {PictureData} />
                <div className='bloc_dropdown'>
                    < Dropdown title = "title" content = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
                    < Dropdown title = "title" content = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
                </div>
                < Footer />
            </div>
        );
    }
    
}

export default App;
import React from 'react';
import '../styles/Logement.css'


import Banner from '../components/Banner';
// import Carousel from '../components/Carousel';
import Dropdown from '../components/Dropdown'
import Footer from '../components/Footer';

// import logements from '../Data/logements.json'

const Logements = require("../Data/logements.json");
const data = Logements.find(pictures => pictures.id === "c67ab8a7");
console.log(data)

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {logement: data}
    }

    render() {
        
        return (
            <div>
                < Banner />
                {/* <Carousel picture = {this.state.logement.cover} /> */}
                <div className='bloc_dropdown'>
                    < Dropdown title = {this.props.logement.title} content = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
                    < Dropdown title = "Fiabilité" content = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
                </div>
                < Footer />
            </div>
        );
    }
    
}

export default App;
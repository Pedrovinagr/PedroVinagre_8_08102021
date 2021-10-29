import React from 'react';
import Picture from '../assets/IMG.jpg';

import Banner from '../components/Banner';
import Headband from '../components/Headband';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import '../styles/Home.css'

const Logements = require("../Data/logements.json")
class App extends React.Component {
    
    render() {
        
        return (
            <div>
                < Banner />
                < Headband picture = {Picture} headline = "Chez vous, partout et ailleurs" />
                <div className='log-list'>{Logements.map((item) => < Cards card= {item} />)}</div>
                < Footer />
            </div>
        );
    }
    
}

export default App;
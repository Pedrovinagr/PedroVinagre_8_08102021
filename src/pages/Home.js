import React from 'react';
import { Link } from 'react-router-dom';

import Banner from '../components/Banner';
import Headband from '../components/Headband';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

import '../styles/Home.css';

import Picture from '../assets/IMG.jpg';

const Logements = require("../Data/logements.json");
class Home extends React.Component {
    
    render() {
        
        return (
            <div>
                < Banner />
                < Headband picture = {Picture} headline = "Chez vous, partout et ailleurs" />
                <div className='log-list'>{Logements.map((item) => 
                <Link to={`/logement/${item.id}`}>
                    <Cards card= {item} /> </Link>)}
                </div>
                < Footer />
            </div>
        );
    }
}

export default Home;
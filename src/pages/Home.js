import React from 'react';
import Logements from '../data/logements.json';
import Picture from '../assets/IMG.jpg';

import Banner from '../components/Banner';
import Headband from '../components/Headband';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
class App extends React.Component {

    constructeur(props) {
        super(props);
        this.State = {listItems: Logements};
        console.log(this.state.listItems)
    }
    
    render() {
        
        console.log(listItems)
        return (
            <div>
                < Banner />
                < Headband picture = {Picture} headline = "Chez vous, partout et ailleurs" />
                {this.state.listItems.map((item) => < Cards card= {item} />)}
                {/* < Cards /> */}
                < Footer />
            </div>
        );
    }
    
}

export default App;
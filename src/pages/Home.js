import React from 'react';
// import Logements from '../data/logements.json';
import Picture from '../assets/IMG.jpg';

import Banner from '../components/Banner';
import Headband from '../components/Headband';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
class App extends React.Component {

    // constructeur(props) {
    //     super(props);
    //     this.setState({listItems: Logements});
    // }

    render() {
        return (
            <div>
                < Banner />
                < Headband picture = {Picture} headline = "Chez vous, partout et ailleurs" />
                {/* {this.state.listItems.map((item) =>
                   < Cards card= {item} />)} */}
                < Cards />
                < Footer />
            </div>
        );
    }
    
}

export default App;
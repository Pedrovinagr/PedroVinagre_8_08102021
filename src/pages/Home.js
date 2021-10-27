import React from 'react';
import Banner from '../components/Banner';
import Logements from '../data/logements.json'
import Cards from '../components/Cards';
import Footer from '../components/Footer';

class App extends React.Component {

    constructeur(props) {
        super(props);
        this.setState({listItems: Logements});
    }

    render() {
        return (
            <div>
                < Banner />
                {this.state.listItems.map((item) =>
                   < Cards card= {item} />)}
                < Footer />
            </div>
        );
    }
    
}

export default App;
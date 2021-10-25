import React from 'react';
import Banner from '../components/Banner';
import logements from '../data/logements.json'
import Cards from '../components/Cards';
import Footer from '../components/Footer';

class App extends React.Component {

    constructeur(props) {
        super(props);
        this.state({listItems: logements.map(({id, title, cover}) =>
        <div className='card'>
            <li key={id.toString()} className='img'> 
                <img className='lmj-plant-item-cover' src={cover} alt={`${id} cover`} />
            </li>
            <li className='title'>
                {title}
            </li>
        </div>)});
    }
    render() {
        return (
            <div>
                < Banner />
                < Cards card={this.state.listItems} />
                < Footer />
            </div>
        );
    }
    
}

export default App;
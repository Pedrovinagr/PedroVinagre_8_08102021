import React from 'react';
import Banner from '../components/Banner';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';

class App extends React.Component {

    render() {
        return (
            <div>
                < Banner />
                < Dropdown />
                < Dropdown />
                < Dropdown />
                < Footer />
            </div>
        );
    }
    
}

export default App;
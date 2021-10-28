import React from 'react';
import Banner from '../components/Banner';
import Error from '../components/Error';
import Footer from '../components/Footer';
class App extends React.Component {

    render() {
        return (
            <div>
                < Banner />
                < Error />
                < Footer />
            </div>
        );
    }
    
}

export default App;
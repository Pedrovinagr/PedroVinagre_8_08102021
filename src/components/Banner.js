import React from 'react';
import LogoBanner from '../assets/LogoBanner.png';
import '../styles/Banner.css';

class Banner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {NavHome: 'Accueil', NavNews: 'A propos'};
    }

    render(){
        return (
            <div className='heater'>
                <img src={LogoBanner} alt='kasa' className='logo' />

                <div className='nav_container'>
                    <a href='/' className="nav home"><span>{this.state.NavHome}</span></a>
                    <a href='/' className="nav news"><span>{this.state.NavNews}</span></a>
                </div>

            </div>
        );
    }

}

export default Banner
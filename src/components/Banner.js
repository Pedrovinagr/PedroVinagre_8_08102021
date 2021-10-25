import React from 'react';
import LogoBanner from '../assets/LogoBanner.png';
import '../styles/Banner.css';

class Banner extends React.Component {

    render(){
        return (
            <div className='heater'>
                <img src={LogoBanner} alt='kasa' className='logo' />

                <div className='nav_container'>
                    <a href='/' className="nav home"><span>Accueil</span></a>
                    <a href='/' className="nav news"><span>A propos</span></a>
                </div>

            </div>
        );
    }

}

export default Banner
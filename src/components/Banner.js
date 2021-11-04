import React from 'react';
import { Link } from 'react-router-dom';
import LogoBanner from '../assets/LogoBanner.png';
import '../styles/Banner.css';

class Banner extends React.Component {

    render(){
        return (
            <div className='heater'>
                <img src={LogoBanner} alt='kasa' className='logo' />

                <div className='nav_container'>
                    <Link to='/' className="nav home"><span>Accueil</span></Link>
                    <Link to='/Propos' className="nav news"><span>A propos</span></Link>
                </div>

            </div>
        );
    }

}

export default Banner
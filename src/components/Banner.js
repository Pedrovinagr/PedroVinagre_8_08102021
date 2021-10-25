import { Component } from 'react';
import LOGO from '../assets/LOGO_Banner.png';
import '../styles/Banner.css';

class Banner extends Component(){

    render(){
        return (
            <div className='heater'>
                <div>
                    <img src={LOGO} alt='kasa' className='logo' />
                </div>
                <div className='nav_container'>
                    <a href className="nav home"><span>Accueil</span></a>
                    <a href className="nav news"><span>A propos</span></a>
                </div>
            </div>
        );
    }
}

export default Banner
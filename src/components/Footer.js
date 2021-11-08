import React from 'react';

import LogoFooter from '../assets/LogoFooter.png';

import '../styles/Footer.css';

class Footer extends React.Component {

    render(){
        return (
            <div className='container_footer'>
                <img src={LogoFooter} alt='kasa' className='logo_footer'/>
                <p className='copyright'> © 2020 Kasa. All rights reserved </p>
            </div>
        );
    }
}

export default Footer
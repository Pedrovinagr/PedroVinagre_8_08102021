import React from 'react';
import LogoFooter from '../assets/LogoFooter.png';
import '../styles/Footer.css';

class Footer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {Copyright: '© 2020 Kasa. All rights reserved'};
    }

    render(){
        return (
            <div className='container_footer'>
                <img src={LogoFooter} alt='kasa' className='logo_footer'/>
                <p className='copyright'>{this.state.Copyright}</p>
            </div>
            
        );
    }
}

export default Footer
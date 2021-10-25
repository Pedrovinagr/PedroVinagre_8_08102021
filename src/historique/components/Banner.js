import {React} from 'react';
import LOGO from '../assets/LOGO_Banner.png';
import '../styles/Banner.css';

class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {NavHome: 'Accueil', NavNews: 'A propos'};
    }

    render(){
        return (
            <div className='heater'>
                <div>
                    <img src={LOGO} alt='kasa' className='logo' />
                </div>
                <div className='nav_container'>
                    <a href='/' className="nav home"><span>{this.state.NavHome}</span></a>
                    <a href='/' className="nav news"><span>{this.state.NavNews}</span></a>
                </div>
            </div>
        );
    }
}

export default Banner
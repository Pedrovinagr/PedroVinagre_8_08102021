import { React } from 'React';
// import LOGO from '../assets/LOGO_Banner.png';
import '../styles/Banner.css';

class Banner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {NavHome: 'Accueil', NavNews: 'A propos' }
    }

    render(){
        return (
            <div className='heater'>
                {/* <div>
                    <img src={LOGO} alt='kasa' className='logo' />
                </div> */}
                <div className='nav_container'>
                    <p href className="nav home"><span>{this.state.NavHome}</span></p>
                    <p className="nav news"><span>{this.state.NavNews}</span></p>
                </div>
            </div>
        );
    }
}

export default Banner
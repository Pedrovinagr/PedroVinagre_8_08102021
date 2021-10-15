import {Component} from 'react';
import '../styles/F_logement.css';
import vectorUp from '../assets/Vector_up.png';

class Dropdown extends Component{
    // constructor(props){
    //     super(props);
    // }

    render() {
        const description = 'Description'
        const ContantDescription = 'Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l\'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d\'affaires. Vous êtes à1 station de la gare de l\'est (7 minutes à pied).'    
        return (
            <div className='dropdown'>
                <div className='drop1'>
                    <div className='dropdowns_up'>
                        <p className='title_dropdown'>{description}</p> 
                        <img src={vectorUp} alt='kasa' className='vector_down' />
                    </div>
                    <div className='content'>
                        <p className='text_content'>{ContantDescription}</p> 
                    </div>
                </div>                      
            </div>
        );
    }
} 

export default Dropdown
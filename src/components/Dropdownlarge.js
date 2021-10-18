// import React from 'react';
import {Component} from 'react';
import '../styles/F_logement.css';
import vectorUp from '../assets/Vector_up.png';
import vectorDown from '../assets/Vector_down.png';

function WarningBanner(props) {
    if (!props.warn) {
      return null;
    }
  
    return ( 
        <div className='content'>
            <p className='text_content'>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à 1 station de la gare de l'est (7 minutes à pied).</p> 
        </div>
    );
  }
  
  class Dropdown extends Component {
    constructor(props) {
      super(props);
      this.state = {showWarning: false};
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }
  
    handleToggleClick() {
      this.setState(state => ({
        showWarning: !state.showWarning
      }));
    }
  
    render() {
        const Up = <img src={vectorUp} alt='kasa' className='vector_up' />
        const Down = <img src={vectorDown} alt='kasa' className='vector_down' />
        const description = 'Description'
      return (
        <div className='dropdown'>
            <div className='dropdowns_up'>
                <p className='title_dropdown'>{description}</p>
                <div className='btn'>
                    <button onClick={this.handleToggleClick} className='dropdown_btn'>
                        {this.state.showWarning ? Up : Down }
                    </button>
                </div>
            </div>
            <div>
                <WarningBanner warn={this.state.showWarning} />
            </div>
        </div>
      );
    }
  }

  export default Dropdown

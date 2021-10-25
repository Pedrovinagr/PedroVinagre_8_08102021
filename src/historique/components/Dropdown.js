// import React from 'react';
import {Component} from 'react';
import '../styles/F_logement.css';
import vectorUp from '../assets/Vector_up.png';
import vectorDown from '../assets/Vector_down.png';

function WarningBanner(props) {

    const description = props.description
    
    if (!props.warn) {
      return null;
    }
  
    return ( 
        <div className='content'>
            <p className='text_content'>{description}</p> 
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
        const title = 'Description'
      return (
        <div className='dropdown'>
            <div className='dropdowns_up'>
                <p className='title_dropdown'>{title}</p>
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

import React from 'react';

import '../styles/Dropdown.css';

import vectorUp from '../assets/Vector_up.png';
import vectorDown from '../assets/Vector_down.png';
class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: false};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState((state) => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    
    const Up = <img src={vectorUp} alt='kasa' className='vector_up' />
    const Down = <img src={vectorDown} alt='kasa' className='vector_down' />
    const DisplayText =
      <div className='content'>
        <p className='text_content'>{this.props.content}.</p> 
      </div>
    const HiddenText = ""

    return (
      <div className='dropdown'>
          <div className='dropdowns_up'>
              <p className='title_dropdown'>{this.props.title}</p>
              <div className='btn'>
                  <button onClick={this.handleToggleClick} className='dropdown_btn'>
                      {this.state.showWarning ? Up : Down }
                  </button>
              </div>
          </div>
          <div>
              {this.state.showWarning ? DisplayText : HiddenText }
          </div>
      </div>
    );
  }
}

export default Dropdown

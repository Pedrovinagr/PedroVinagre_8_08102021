// import React from 'react';
import React from 'react';
import '../styles/F_logement.css';
import vectorUp from '../assets/Vector_up.png';
import vectorDown from '../assets/Vector_down.png';

// function ExpandDropdown(props) {
  
//   // const textContent = props.content;
//   // const textContent = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."

//   if (!props.warn) {
//     return null;
//   }

//   return ( 
//       <div className='content'>
//           <p>{this.props.content}</p>
//       </div>
//   );
// }

// class ExpandDropdown extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {contents: this.props.content}
//     this.state = {warn: this.props.warn}
//   }
  
//   render() {
//     const warn = {}
//     if (!props.warn) {
//       return null;
//     }
    
//     return ( 
//         <div className='content'>
//             <p className='text_content'>{this.state.contents}</p> 
//         </div>
//     );
//   }
// }
class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: false};
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.expandDropdown = this.expandDropdown.bind(this);
    this.state = {titles: this.props.title}
  }

  handleToggleClick() {
    this.setState((state) => ({
      showWarning: !state.showWarning
    }));
  }

  expandDropdown(props) {
  
    // const textContent = props.content;
    // const textContent = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
  
    if (!props.warn) {
      return null;
    }
  
    return ( 
        <div className='content'>
            <p>{this.props.content}</p>
        </div>
    );
  }

  render() {
    
    const Up = <img src={vectorUp} alt='kasa' className='vector_up' />
    const Down = <img src={vectorDown} alt='kasa' className='vector_down' />

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
              <expandDropdown warn={this.state.showWarning} />
              {/* <p>{this.props.content}</p> */}
          </div>
      </div>
    );
  }
}

export default Dropdown

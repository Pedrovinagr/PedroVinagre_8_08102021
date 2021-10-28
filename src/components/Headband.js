import React from 'react';
import '../styles/Headband.css';

class Sweatband extends React.Component {

    render() {
        
        return (
            <div className='body'>
                <img src={this.props.picture} alt='img' className='picture' />
                <div className='mask'>
                    <h1 className='headline'>{this.props.headline}</h1>
                </div>
            </div>
            
        );
    }
} 

export default Sweatband
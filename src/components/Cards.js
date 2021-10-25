import React from 'react';
import '../styles/Cards.css';

class Cards extends React.Component {

    constructor(props){
        super(props)
        this.state = {card: this.props.card}
    }
    
    render(){
        return (
            <div>
                <ul className='log-list'>
                    <div className='card'>
                        <li key={this.state.card.id.toString()} className='img'> 
                            <img className='lmj-plant-item-cover' src={this.state.card.cover} alt={`${this.state.card.id} cover`} />
                        </li>
                        <li className='title'>
                            {this.state.card.title}
                        </li>
                    </div>)
                </ul>
		    </div> 
        );
    }
}

export default Cards 
import React from 'react';
import logements from '../Datas/logements.json';
import '../styles/Cards.css';

class Cards extends React.Component {

    constructor(props) {
        super(props);
        this.state = {cards: card}
    }

    render(){
        return (
            <div>
                <ul className='log-list'>
                    {this.state.cards}
                </ul>
		    </div> 
        );
    }
}

export default Cards 
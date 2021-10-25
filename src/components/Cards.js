import React from 'react';
import '../styles/Cards.css';

class Cards extends React.Component {

    constructor(props) {
        super(props);
        this.state = {cards: this.props.card}
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
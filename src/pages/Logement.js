import React from 'react';

import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import HousingInfo from '../components/HousingInfo';
import Dropdown from '../components/Dropdown'
import Footer from '../components/Footer';

import '../styles/Logement.css';

const Logements = require("../Data/logements.json");
class Logement extends React.Component {
    
    constructor(props){
        super(props)
        this.logementId = this.props.match.params.id;
        this.logement = Logements.find(item => item.id === this.logementId);
    }

    render() {
        const PictureData = this.logement.pictures;
        const ContentDescrip = this.logement.description.valueOf()
        const ContentEquip = this.logement.equipments.map((content) => <li>{content}</li> )

        return (
            <div>
                < Banner />
                <Carousel picture = {PictureData} />
                <HousingInfo datas = {this.logement} className='housing_info'/>
                <div className='bloc_dropdown'>
                    < Dropdown title = "Description" content = {ContentDescrip}/>
                    < Dropdown title = "Equipements" content = {<ul> {ContentEquip} </ul>}/>
                </div>
                < Footer />
            </div>
        );
    }
}

export default Logement;
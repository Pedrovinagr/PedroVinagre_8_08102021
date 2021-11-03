import React from 'react';
import '../styles/Logement.css'

import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import HousingInfo from '../components/HousingInfo';
import Dropdown from '../components/Dropdown'
import Footer from '../components/Footer';

// import logements from '../Data/logements.json'
const Logements = require("../Data/logements.json");
class App extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state = {logement: Logements.find(pictures => pictures.id === this.props.match.id('c67ab8a7'))}
    // }

    render() {
        const Data = Logements.find(pictures => pictures.id === "0979876d");
        const PictureData = Data.pictures;
        const ContentDescrip = Data.description.valueOf()
        const ContentEquip = Data.equipments.map((content) => <li>{content}</li> )


        return (
            <div>
                < Banner />
                <Carousel picture = {PictureData} />
                <HousingInfo datas = {Data} className='housing_info'/>
                <div className='bloc_dropdown'>
                    < Dropdown title = "Description" content = {ContentDescrip}/>
                    < Dropdown title = "Equipements" content = {<ul> {ContentEquip} </ul>}/>
                </div>
                < Footer />
            </div>
        );
    }
    
}

export default App;
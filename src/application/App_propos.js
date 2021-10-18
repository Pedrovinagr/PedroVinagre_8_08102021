// import Banner from '../components/Banner';
// import SweatbandPropos from '../components/Headband_propos';
// import Footer from '../components/Footer';
// import Dropdownlarge from '../components/Dropdownlarge';
// import DropdownOpen from '../components/Dropdownlarge_open';

const informationList = [
    {
      "id": "Drp01",
      "title": "Fiabilité",
      "description": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    },
    {
      "id": "Drp02",
      "title": "Respect",
      "description": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
      "id": "Drp03",
      "title": "Service",
      "description": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
      "id": "Drp04",
      "title": "Sécurité",
      "description": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
  ]

function Dropdownlist() {

  return (
    <ul>
      {informationList.map((title) => (
        <li>{title}</li>
      ))}
    </ul>
);       
}
export default Dropdownlist;



/* <div>
<Banner />
<SweatbandPropos />
<div>
<div>
  {informationList.map((information) => (
    <div key={'${information}-${index}'}>{information}</div>
  ))}
</div>
  <Dropdownlarge />
</div>
<Footer />
</div> */

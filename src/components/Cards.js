import logements from '../Datas/logements.json'
import '../styles/Cards.css';

function Cards(){
    const data = [logements];
    console.log(data)
    const listItems = data.map((id, title) =>
        <li key={id.toString()}> {title}</li>
        );

    return(
        <div>
            <ul className='log-list'> {listItems}
			</ul>
		</div>
	)
}

export default Cards


//     const titleCard1 = 'Titre de la'
//     const titleCard2 = 'location'
//     return (
//         <div className='cards'>
//             <div className='card'>
//                 <div className='card_font'>
//                     <div className='title_card'>
//                         <p className='title'>{titleCard1}</p>
//                         <p className='title'>{titleCard2}</p> 
//                     </div>
//                 </div>
//             </div>

//             <div className='card'>
//                 <div className='card_font'>
//                     <div className='title_card'>
//                         <p className='title'>{titleCard1}</p>
//                         <p className='title'>{titleCard2}</p> 
//                     </div>
//                 </div>
//             </div>

//             <div className='card'>
//                 <div className='card_font'>
//                     <div className='title_card'>
//                         <p className='title'>{titleCard1}</p>
//                         <p className='title'>{titleCard2}</p> 
//                     </div>
//                 </div>
//             </div>

//             <div className='card'>
//                 <div className='card_font'>
//                     <div className='title_card'>
//                         <p className='title'>{titleCard1}</p>
//                         <p className='title'>{titleCard2}</p> 
//                     </div>
//                 </div>
//             </div>
            
//             <div className='card'>
//                 <div className='card_font'>
//                     <div className='title_card'>
//                         <p className='title'>{titleCard1}</p>
//                         <p className='title'>{titleCard2}</p> 
//                     </div>
//                 </div>
//             </div>

//             <div className='card'>
//                 <div className='card_font'>
//                     <div className='title_card'>
//                         <p className='title'>{titleCard1}</p>
//                         <p className='title'>{titleCard2}</p> 
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// } 
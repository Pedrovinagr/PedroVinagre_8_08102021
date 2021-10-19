import logements from '../Datas/logements.json'
import '../styles/Cards.css';

function Cards(){
    const data = [logements];

    return(
        <div>
            <div className='log-list'>
				{data.map(({ id, title}) => (
					<div>
                        <div key={id.toString()} className='log-item'>
			                {title}
		                </div>
                    </div>
				))}
			</div>
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
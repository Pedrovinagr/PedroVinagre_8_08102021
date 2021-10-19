import logements from '../Datas/logements.json'
import Cards from '../components/Cards'
import '../styles/Cards.css';



function CardList(){
    const data = [logements]

    return(
        <div>
            <ul className='log-list'>
				{data.map(({ id, title, cover}) => (
					<Cards
						id={id}
                        title={title}
						cover={cover}
					/>
				))}
			</ul>
		</div>
	)
}

export default CardList
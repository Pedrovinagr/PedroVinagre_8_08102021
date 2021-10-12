import '../styles/404_error.css';

function Error(){
    
    const err404 = '404';
    const mess404 = 'Oups! La page que vous demandez n\'existe pas.'
    const returnHome = 'Retourner sur la plage d\'accueil'
    return (
        <div className='container_404'>
            <p className='err404'>{err404}</p>
            <p className='mess404'>{mess404}</p>
            <div className='link_home'>
                <a href className="return_home"><span>{returnHome}</span></a>
            </div>
        </div>
        
    );
} 

export default Error
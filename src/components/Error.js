import React from 'react';
import '../styles/Error.css';

class Error extends React.Component {
    
    render() {
        return (
            <div className='container_404'>
                <p className='err404'>404</p>
                <p className='mess404'>Oups! La page que vous demandez n'existe pas.</p>
                <div className='link_home'>
                    <a href="/" className="return_home"><span>Retourner sur la plage d'accueil</span></a>
                </div>
            </div>
            
        );
    }
} 

export default Error
import React from 'react';
import Batman  from './Bat.mp4'
import {Link} from 'react-router-dom'

//Affichage de Batman begins
function Bat ()
{

    return <div className='clean'>
    <h1>BATMAN BEGINS</h1>
    <video src={Batman} width={400} height={400} controls></video>
    <h3> De retour chez lui à Gotham, le jeune homme se charge de la gestion de Wayne Enterprises dont il est l'héritier. Opérant depuis
         le sous-sol du manoir familial avec l'aide de son majordome Alfred 
        Pennyworth, Bruce Wayne se lance alors dans la lutte contre le crime sous le nom de Batman.</h3>
    <button><Link to='/'>Acceuil</Link></button>
    </div>

}


export default Bat;
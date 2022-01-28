import React from 'react';
import Doom  from './Doom.mp4'
import {Link} from 'react-router-dom'

//Affichage du Doom Slayer
function Slayer ()
{

    return <div className='clean'>
    <h1>DOOM ETERNAL</h1>
    <video src={Doom} width={400} height={400} controls></video>
    <h3>Le Doom Slayer, précédemment envoyé vers un endroit inconnu, revient sur Terre avec un
         nouvel arsenal d'armes et une forteresse sur un satellite de la Terre contrôlée par l'IA 
         VEGA, pour anéantir les forces démoniaques.</h3>
    <button><Link to='/'>Acceuil</Link></button>
        
    </div>
}


export default Slayer;


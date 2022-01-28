import React from 'react';
import Superman  from './Mof.mp4'
import {Link} from 'react-router-dom'

//Affichage de Superman

function Super ()
{

    return <div className='clean'>
    <h1>MAN OF STEEL</h1>
    <video src={Superman} width={400} height={400} controls></video>
    <h3>Clark Kent, élevé dans une ferme du Kansas, s'interroge sans cesse sur sa différence. Il apprend qu'il est né sur Krypton, un monde lointain aujourd'hui disparu dont les ultimes représentants tentent de conquérir la Terre au mépris de la civilisation humaine.
         Clark va devoir prendre de difficiles décisions pour devenir le symbole d'espoir 
         pour toute l'humanité…</h3>
    <button><Link to='/'>Acceuil</Link></button>

    </div>
}


export default Super;



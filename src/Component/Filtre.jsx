import React from 'react';
import Movie from './MovieCard'
import './style.css'
import Superman from './images/Superman.jpg'
import Batman from './images/Btaman.jpg'
import Doom from './images/doom4.jpg'
import {Link} from 'react-router-dom'



//Gere la recherche d'un film 
class Filter extends React.Component{
   
        //Initialisation du constructeur
        constructor(props)
        {
            super(props)
            this.state = {
                fullname : props.fullname,
                movie : props.movie,

            }
        }

        //Chargement des films
        Changefullname = (event)=>{
       
            
        if(event.target.value === "Superman")
        {
            
            this.setState({movie:<Link to='/Component/Superman'><Movie titre="Superman" description="MAN OF STEEL" posterUrl={Superman} classification="50%" /></Link>})
        }
        else if (event.target.value === "")
        {
            this.setState({movie: "ALORS TU NE CONNAIS PAS DE FILM"})
        }
        else if (event.target.value === "Batman")
        {
            this.setState({movie:<Link to='/Component/Batman'><Movie titre="Batman" description="BATMAN" posterUrl={Batman} classification="20%" /></Link>})
        }
        else if (event.target.value === "Doom")
        {
            
            this.setState({movie:<Link to='/Component/Doom'><Movie titre="Doom-SLAYER" description="DOOM ETERNAL" posterUrl={Doom} classification="10%" /></Link>})
        }
        }
    

   
    render()
    {
        
        //Entree pour chercher un film
        return  <div className='clean'>
                        <p>
                        <label for="fullname"> The Movies </label> 
                        <br/>
                        <input type='search' name="s" id="fullname" onChange={this.Changefullname} placeholder="Recherche un Film.." required/>
                        <p>
                        Film Disponible : Batman-Superman-Doom
                        </p>
                    
                        </p>
                        
                        {
                                //Affichage du film selectionné
                                this.state.movie
                        }
                    </div>

    }

}


export default Filter;
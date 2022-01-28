import React from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Filter from './Component/Filtre'
import Superman from './Component/Superman/Superman'
import Batman from './Component/Batman/Batman'
import Doom from './Component/Doom/Doom'

//Entrée de l'application avec les routes pour naviguer
class App extends React.Component
{
                
               render(){
                return <div>
                    <Routes>
                        <Route path="/" element={<Filter/>}/>
                        <Route path='/Component/Superman' element={<Superman/>}/>
                        <Route path='/Component/Batman' element={<Batman/>}/>
                        <Route path='/Component/Doom' element={<Doom/>}/>
                    </Routes>
                  
                </div>
                          
                }
                
                        
                  

               
                
                 
}

 


export default App;


import React from 'react';
import './css/app.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Menue from './components/Menue';
import { useState } from 'react';
import { useEffect } from 'react';
import Box from './components/Box';
import Command from './components/Command';
import Client from './components/Client';
import Retrait from './components/Retrait';
import Compte from './components/Compte';


const App = () => {
  const current1 = localStorage.getItem('current1')
  const [theme, setTheme] = useState( current1 ? current1 :'light');
  useEffect ( ()=>{
    localStorage.setItem('current1', theme);
  },[theme])

  const togglekey = localStorage.getItem('togglekey');

  const [close , setClose]= useState(togglekey ? togglekey :false);

  useEffect(()=>{
    localStorage.setItem('togglekey', close);
    
},[close])

  return (
    <div className={`conteneur ${theme} ${close}`}>
      <Router>
        <Menue  theme={theme} setTheme={setTheme} close={close} setClose={setClose}/>
          <Routes>
               <Route path="/" element={<Box />} /> 
               <Route path="/commande" element={<Command />} /> 
               <Route path="/client" element={<Client/>} /> 
               <Route path="/retrait" element={<Retrait/>} />  
               <Route path="/compte" element={<Compte/>} />  
                
          </Routes>
        </Router>

      </div>
  
  );
}

export default App;

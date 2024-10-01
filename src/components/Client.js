import React from 'react'
import '../css/ListCommande.css'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';


const Client = () => {
    const [data, setData] = useState([])
    useEffect(() =>{
        fetch("http://https://node-asaph.onrender.com/command")
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
        .catch(err =>console.log() );
      },[])

      const suprimer = async (id)=>{
        try{
            await axios.delete(` http://localhost:https://node-asaph.onrender.com/delete/`+id)
            window.location.reload()
        }catch(err){
            console.log(err);
        }
                
      };
    
    return (
        <div className='home'>
        <div className='cadre1'>
        <div className='tTable'>
        <table>
        <thead>
                <tr>
                    <th>Date</th>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Numero</th>
                    <th>Prix_Montures</th>
                    <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {data.map((d, i) => (
                <tr key={i}>
                <td>{d.date} </td>
                <td>{d.nom}</td>
                <td>{d.prenom}</td>
                <td>{d.tel}</td>
                <td>{d.prix_m}</td>
                <td><i onClick={e => suprimer(d.id)} className="fas fa-trash sup"></i></td>
            </tr>
            ))}
                

        </tbody>
        </table>
            
    </div>
    </div>
    </div>
    );
}

export default Client;



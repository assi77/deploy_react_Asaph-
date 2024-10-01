import { useEffect, useState } from 'react';
import '../css/box.css'
import React from 'react';
import { Chart as Chartjs } from 'chart.js/auto';
import { Bar, Doughnut } from 'react-chartjs-2';

const Compte = () => {
   
    const [data1, setData] = useState([])
    useEffect(() =>{
        fetch("http://https://node-asaph.onrender.com/command")
        .then(res => res.json())
        .then(data1 => {
            setData(data1)
        })
        .catch(err =>console.log() );
      },[])

    return (
        <div className='home'>
        <div className='contener-box'>
                <div className='box'>
                    <p>{data1.length}<br/><span>Revenue</span></p>
                    <i className='fa-solid fa-bar-chart icon-1'></i>
                </div>
            </div>
            <div className='contener-box'>
                <div className='box'>
                    <p>{data1.length}<br/><span>Depense</span></p>
                    <i className='fas fa-wallet icon-1'></i>
                </div>
            </div><div className='contener-box'>
                <div className='box'>
                    <p>{data1.length}<br/><span>Chiffre d Affaire</span></p>
                    <i className='fas fa-wallet icon-1'></i>
                </div>
            </div>
            <div className='box-contain'>
                <div className='box-8'>
                    <div className='box-1'>
                        <p>Top Analyse en Coube</p>
                        <br/>
                        <Bar
                           data={{
                            labels: ["Janvier", "Frevier", "Mars"],
                            datasets :[
                                {
                                    label: "Revenue",
                                    data: data1.map((data) => data.prix_m),
                                },
                            ],
                           }}      
                        />
                    </div>
                
                </div>
            </div>
            <div className='box-contain-1'>
                <div className='box-4'>
                    <div className='box-1'>
                        <p >Totale en Begger</p>
                        <Doughnut 
                           data={{
                            labels: ["Janvier", "Frevier", "Mars"],
                            datasets :[
                                {
                                    label: "Revenue",
                                    data: data1.map((data) => data.prix_m),
                                },
                            ],
                           }}      
                        />
                    </div>
                </div>
            </div>

            
        </div>
    );
}

export default Compte;

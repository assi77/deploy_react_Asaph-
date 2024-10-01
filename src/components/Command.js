import React, { useState } from 'react';
import '../css/commande.css'
import Validation from './Validation';
import axios from 'axios';

const Command = () => {
    let count = [];
   for(let i = 0; i<=18; i++) {
    count.push(i*10);
   }

    const [value, setValue]=useState({
        nom:"",
        prenom:"",
        tel:"",
        quartier:"",
        date:"",

        degre_d:"",
        metre_d:"",
        verre_d:"",

        degre_g:"",
        metre_g:"",
        verre_g:"",

        prix_m: "",
        prix_av:""

    })
    const [errors, setErrors] = useState({})
    const handleInput = (event) =>{
        setValue(prev =>({...prev, [event.target.name]: [event.target.value] }))
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        setErrors(Validation(value));
        if(Object.keys(Validation).length === 0){
            axios.post('https://node-asaph.onrender.com/command', 
            value
            )
            .then(() => {
                alert('importation reussi.....');
               console.log('succes...');
            })
            .catch(() => {
                console.log("importation echoué")
                alert('importation IMPOSSIBLE.....');
            })
            

        
        }
        
    }
    return (
        <div className='home'>
            <div className='containe'>
                <form action='' onSubmit={handleSubmit}>
                <div class="details personal">
						<span class="title">Idendifiant du clients</span>
                    <div className='fields'>
                        <div className="input">
                            <label>Nom</label>
                            <input type="texte" name="nom"  placeholder="Entrez le nom" onChange={handleInput} />
                            {errors.nom && <span className='errors'>{errors.nom} </span> }
                        </div>
                        <div className="input">
                            <label>Prenom</label>
                            <input type="texte" name="prenom" placeholder="Entrez le prenom"  onChange={handleInput}/>
                            {errors.prenom && <span className='errors'>{errors.prenom} </span> }
                        </div>
                        <div className="input">
                            <label>Numero de Telephone</label>
                            <input type="texte" name="tel" placeholder="Entrez le Numero" onChange={handleInput}/>
                            {errors.tel && <span className='errors'>{errors.tel} </span> }
                        </div>
                        
                        <div className="input">
                            <label>Quartier</label>
                            <input type="texte" name="quartier" placeholder="Entrez le Nom du Quartier"  onChange={handleInput}/>
                            {errors.quartier && <span className='errors'>{errors.quartier} </span> }
                        </div>
                        <div className="input">
                            <label>la Date de Commande</label>
                            <input type="date" name="date"   onChange={handleInput}/>
                            {errors.date && <span className='errors'>{errors.date} </span> }
                        </div>
                        
                    </div>
                    <span class="title">Detaille des Montures</span>

                        <div className='detail-monture'>
                            <div className='droite'>
                                 <h2>L' OEIL DROITE</h2>

                                    <div className='group1'>
                                        <div className="select">
                                            <label> * Degré * </label>
                                            
                                            <select name="degre_d" onChange={handleInput} >
                                                 {count.map((counts) =>(
                                                 <option key= {counts} value={counts}>{counts} ¤</option>
                                                   ))}
                                            </select>
                                             {errors.degre_d && <span className='errors'>{errors.degre_d} </span> }
                                        </div>
                                        
                                        <div className="select">
                                            <label> * types de verres * </label>
                                            <select name='verre_d'  onChange={handleInput}>
                                                <option value='simple foyers'> simple foyers</option>
                                                <option value='double foyers'>double foyers</option>
                                                <option value='progressifs'>progrissifs</option>
                                                <option value='varilux phisio'>varilux phisio</option>
                                            </select><br/> 
                                            {errors.verre_d && <span className='errors'>{errors.verre_d} </span> }        
                                        </div>
                                        
                                    </div>
                            
                            </div>
                            <div className='gauche'>
                                <h2>L' OEIL GAUCHE</h2>
                                    
                                    <div className='group1'>

                                        <div className="select">
                                                <label> * Degré * </label>
                                                <select name="degre_g" onChange={handleInput} >
                                                 {count.map((counts) =>(
                                                 <option key= {counts} value={counts}>{counts} ¤</option>
                                                   ))}
                                            </select>
                                                 {errors.degre_g && <span className='errors'>{errors.degre_g} </span> }
                                            </div>
                        
                                            <div className="select">
                                                <label> * types de verres  * </label>
                                                <select name='verre_g'  onChange={handleInput}>
                                                    <option value='photograys'> photograys</option>
                                                    <option value='photogray + AR'>photogray + AR</option>
                                                    <option value='photogray AR bleue cut'>photogray AR bleue cut</option>
                                                    <option value='teinte AB,C'>teinte AB,C</option>
                                                    <option value='transitions'>transitions</option>
                                                </select><br/> 
                                                 {errors.verre_g && <span className='errors'>{errors.verre_g} </span> }
                                            </div>
                                     </div>
                            </div>
                        </div>
                        <div className="prix">
                            <label> * prix de la monture* </label>
                            <input type='text' name='prix_m' placeholder=' EX : 100000 XOF'  onChange={handleInput}/> 
                            <label> * Escompte* </label>
                            <input type='text'name='prix_av' placeholder=' EX : 100000 XOF'  onChange={handleInput}/>            
                        </div>
                    
                    <div className='buton'><button>Valider</button></div>  
                </div>       
            </form>
            </div>
            
        </div>
    );
}

export default Command;

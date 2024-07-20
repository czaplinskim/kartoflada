'use client'

import LocationPin from "./svg/LocationPin";


import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import firebaseApp from "../../config";

import { child, get, getDatabase, increment, ref, set, update } from "firebase/database";
import { useEffect, useState } from 'react';



export default function Vote() {

    const [statusOfVoting, setStatusOfVoting] = useState('');
    const [activeId, setActiveId] = useState('');



    function voteFirebase(passedPhoneNumber, passedCode = null, passedVoteId) {

        const auth = getAuth(firebaseApp);
        
        get(child(ref(getDatabase()), `voters`)).then((snapshot) => {
            
            const keysArray = Object.keys(snapshot.val());
            if(keysArray.indexOf(passedPhoneNumber) > -1) {
                setStatusOfVoting('alreadyvoted')

            } else {
    
                if(passedCode) { 
    
                    const code = Number(passedCode)
                
                    window.confirmationResult.confirm(code).then((result) => {

                        console.log('raz')
                        
                        const user = result.user;
                        const db = getDatabase(firebaseApp);
                        set(ref(db, 'voters/' + passedPhoneNumber), {
                            passedPhoneNumber
                          });
 
                        const updates = {};
                        updates[`resturants/${passedVoteId}/voteCount`] = increment(1);
                        update(ref(db), updates);
                        setStatusOfVoting('success')

                          return
    
                
                    // ...
                    }).catch((error) => {
                        console.log(error)
                  
                    });
        
            }
        
        
            if(!window.recaptchaVerifier) { window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
                'size': 'invisible',    
                'callback': (response) => {
                        console.log(response)
                    }
                }, auth); }
        
            const appVerifier = window.recaptchaVerifier;
            const phoneNumber = passedPhoneNumber;
        
        
            return signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
        
                console.log('sent')
                window.confirmationResult = confirmationResult;
                setStatusOfVoting('sendcode')

            
        
            }).catch((error) => {
        
                console.log(error.message)
                window.recaptchaVerifier.clear()
                setStatusOfVoting('error')

        
            });
    
    
            }
    
        })
    
    }
    
    

    // DISH LIST START
    const [itemToVoteFor, setDishList] = useState([]);

    let tempArray;

    const catchRealtime = () => {

        const dbRef = ref(getDatabase());
    
        get(child(dbRef, `resturants`)).then((snapshot) => { 

            tempArray = Object.values(snapshot.val())
    
        })
        .catch((error) => {
            console.error(error);
        });
    
    }

    useEffect(() => {
        const timer = setTimeout(() => {
          setDishList(tempArray);
          console.log(itemToVoteFor)
        }, 500);
    
        return () => clearTimeout(timer);
      }, []);
      

    catchRealtime();

    // DISH LIST END




    function handleSubmit(e) {
        
        e.preventDefault();
        voteFirebase(`+48${formData.phonenumber}`, formData.kodsms, activeId)

    }


 

    const [formData, setFormData] = useState({
        phonenumber: '',
        kodsms: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleVoteFirst = (id) => {

        setFormData({
            phonenumber: '',
            kodsms: '',
          });

        const allContainers = document.querySelectorAll('.vote-auth-container-outer');
        const voteIdContainer = 'vote-' + id;
        allContainers.forEach(item => {

            if(voteIdContainer != item.id) { item.style.display = "none" }
            
        })

        
        const container = document.getElementById(voteIdContainer)
        setActiveId(id)
        if(container.style.display == "inline") 
            { container.style.display = "none";} 
        else  { container.style.display = "inline";}


    }

    return <section id='glosuj' className="vote-section">
        
       <h2  className="vote-section__header">Głosuj na najlepszą ziemniaczaną potrawę</h2>



       {itemToVoteFor.map(item =>
                <div className="vote-item-container">
            
                <div className="vote-item-subcontainer vote-item-restaurant">
                    <span className="vote-item-subcontainer__label vote-item-restaurant__label">Restauracja</span>
                    <span className="vote-item-subcontainer__header vote-item-restaurant vote-item-restaurant__header">{ item.resName }</span>
                    <span className="vote-item-subcontainer__sublabel vote-item-restaurant"><LocationPin></LocationPin>({item.resAdress})</span>
                </div>
            
                <div className="vote-item-subcontainer vote-item-dish">
                    <span className="vote-item-subcontainer__label vote-item-dish__label vote-item-dish__label">Potrawa</span>
                    <span className="vote-item-subcontainer__header vote-item-dish__header vote-item-dish__header">{item.dishName}</span>                
                </div>
            
                <div className=" vote-item-subcontainer vote-item-vote-section">

                <button onClick={() => handleVoteFirst(item.id)} class="button button__menu button--yellow button--regular">ODDAJ SWÓJ GŁOS</button>
                    <span class="vote-item-vote-section__label">(LICZBA GŁOSÓW: {item.voteCount})</span>
                </div>

                <div id={`vote-${item.id}`} class='vote-auth-container-outer'>

                {statusOfVoting == 'success' && (<div className='vote-auth-success-container'> DZIĘKUJEMY ZA ODDANIE GŁOSU! </div>)}
                {statusOfVoting !== 'success' && (<div  className='vote-auth-container'>
                        <form onSubmit={() => e.preventDefault} className='vote-auth-container__form'  >
                            <div className="vote-auth-container__inner">
                                            <label className="vote-auth-container__label" for="phonenumber">Numer telefonu:</label>
                                            <span className="vote-auth-container__number_span">(+48)</span>
                                            <input id="phonenumber" className="vote-auth-container__input--phone-number  vote-auth-container__input" type='text'
                                            name='phonenumber'
                                            value={formData.phonenumber}
                                            onChange={handleChange}></input>

                    {statusOfVoting == 'alreadyvoted' && <span className="vote-auth-container__warn">Z numeru już oddano głos</span>}
                    {statusOfVoting == 'error' && <span className="vote-auth-container__warn">Wystąpił błąd. Spróbuj później.</span>}

                            </div>
                            <div className="vote-auth-container__inner">
                                            <label className="vote-auth-container__label" for="kodsms">Kod SMS:</label>
                                            <input disabled={statusOfVoting !== 'sendcode' } id="kodsms" className="vote-auth-container__input" type='text'
                                                name='kodsms'
                                                value={formData.kodsms}
                                                onChange={handleChange}></input>

                            </div>
                            
                            <div className="vote-auth-container__inner">

                            <button onClick={handleSubmit} className='button button__vote button--dark-blue button--menu' id='sign-in-button'> { statusOfVoting === 'sendcode' ? 'POTWIERDŹ GŁOS' : 'WYŚLIJ KOD' } </button>

                
                            </div>
                    </form>

                    <div className="vote-auth-container__info">
                    Aby oddać głos wpisz swój numer telefonu. Otrzymasz na niego kod SMS, którym musisz potwierdzić swój głos. Z jednego numeru możesz zagłosować tylko raz. Biorąc udział w głosowaniu akceptujesz zapisy <a href='https://ckm.mielno.pl/wp-content/uploads/2024/07/Regulamin_Kartoflada_Konsumenci.pdf' target="_blank">regulaminu. </a>
                    </div>    
                </div>)}

                </div>
              
            
            </div> )} 

    </section> 
}
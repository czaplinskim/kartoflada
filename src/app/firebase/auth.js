import firebaseApp from "../../config";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { getDatabase, get, ref, set, child, increment } from "firebase/database";


export default function voteFirebase(passedPhoneNumber, passedCode = null, passedVoteId) {

    const auth = getAuth(firebaseApp);

    console.log(auth.currentUser)

    get(child(ref(getDatabase()), `voters`)).then((snapshot) => {
        
        const keysArray = Object.keys(snapshot.val());
        if(keysArray.indexOf(passedPhoneNumber) > -1) {
            return 'alreadyvoted'
        } else {


            if(passedCode) { 

                const code = Number(passedCode)
            
                window.confirmationResult.confirm(code).then((result) => {
                    
                    const user = result.user;
                    const db = getDatabase(firebaseApp);
                    set(ref(db, 'voters/' + passedPhoneNumber), {
                        passedPhoneNumber
                      });

                    set(ref(db, 'resturants/' + passedVoteId), {
                        voteCount: increment(1)
                      });

                      return 'sukces'

            
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
            return 'wyslany_kod'
        
    
        }).catch((error) => {
    
            console.log(error.message)
            window.recaptchaVerifier.clear()
            return 'blad_sprobuj'
    
        });


        }

    })

}






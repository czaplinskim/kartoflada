function voteFirebases() {       

        

    console.log('raz')

    const auth = getAuth(firebase_app);
    // auth.languageCode = 'pl';

    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',    
        'callback': (response) => {
                console.log('raz')
            }
        }, auth);

    const appVerifier = window.recaptchaVerifier;
    const phoneNumber = '+48791150450'


    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {

        console.log('confirmationResult')
    // SMS sent. Prompt user to type the code from the message, then sign the
    // user in with confirmationResult.confirm(code).
    window.confirmationResult = confirmationResult;
    // ...
    }).catch((error) => {

        console.log(error)

    // Error; SMS not sent
    // ...
    });
// const phoneNumber = getPhoneNumberFromUserInput();

}


// signUp()
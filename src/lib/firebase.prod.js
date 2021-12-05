import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCccS9OKK9OKJbhjFZi4Zr1goqOKgvQRrU",
    authDomain: "netflix-af633.firebaseapp.com",
    projectId: "netflix-af633",
    storageBucket: "netflix-af633.appspot.com",
    messagingSenderId: "1065184672575",
    appId: "1:1065184672575:web:ac1e238ad23508592fb18a"
};

const firebase = Firebase.initializeApp(config);

export { firebase }
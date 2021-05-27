import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig= {
    apiKey: "AIzaSyDsh0wjFA6DCuLyU-hIwStOpyfw_NbL0w4",
    authDomain: "juno1-8ff63.firebaseapp.com",
    databaseURL: "https://juno1-8ff63-default-rtdb.firebaseio.com",
    projectId: "juno1-8ff63",
    storageBucket: "juno1-8ff63.appspot.com",
    messagingSenderId: "587163891699",
    appId: "1:587163891699:web:f62e46794fa2ba66fc0486"
}

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 export default firebase;
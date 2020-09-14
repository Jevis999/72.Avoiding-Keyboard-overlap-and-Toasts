import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
   apiKey: "AIzaSyArMlSLc_CqkVTSCXhg0ka9FA0f3jmedhA",
   authDomain: "wili-795f7.firebaseapp.com",
   databaseURL: "https://wili-795f7.firebaseio.com",
   projectId: "wili-795f7",
   storageBucket: "wili-795f7.appspot.com",
   messagingSenderId: "892908452394",
   appId: "1:892908452394:web:d73445979e0f6c9a6f6153"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 export default firebase.firestore()
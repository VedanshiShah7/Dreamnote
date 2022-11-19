import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC0kzTOxtw3KzGYlolrcAdhQ1lDYxV3-bQ",
  authDomain: "dreamnote-5797e.firebaseapp.com",
  projectId: "dreamnote-5797e",
  storageBucket: "dreamnote-5797e.appspot.com",
  messagingSenderId: "463179426802",
  appId: "1:463179426802:web:035390c97538d78031d96b",
  measurementId: "G-XYK6R4G48V"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;

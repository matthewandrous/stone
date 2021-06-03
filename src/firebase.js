import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDD7jdAfe3RqDnrE78Xfmau0F89g08UXQg",
        authDomain: "stone-676ec.firebaseapp.com",
        projectId: "stone-676ec",
        storageBucket: "stone-676ec.appspot.com",
        messagingSenderId: "224157942796",
        appId: "1:224157942796:web:385baa1e1968a17069da29",
        measurementId: "G-79NMVVXBWZ",
});

export {firebaseConfig as firebase };

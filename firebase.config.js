import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBAtVbo4436LMnbvRQldQ-Zb_snWEhhn4U",
    authDomain: "privacychat-677a1.firebaseapp.com",
    databaseURL: "https://privacychat-677a1.firebaseio.com",
    projectId: "privacychat-677a1",
    storageBucket: "privacychat-677a1.appspot.com",
    messagingSenderId: "459707901355"
};

export const firebaseApp = firebase.initializeApp(config);

export const database = firebaseApp.database();

export const db = firebase.firestore();

export const messagesRef = database.ref('group');

export const usersRef = database.ref('users');
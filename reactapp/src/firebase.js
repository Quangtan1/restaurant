import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAV4GURbcLUkLIZyQheNyYiT2OfC40Gj4c",
    authDomain: "restaurantapp-c6a92.firebaseapp.com",
    databaseURL: "https://restaurantapp-c6a92-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-c6a92",
    storageBucket: "restaurantapp-c6a92.appspot.com",
    messagingSenderId: "824021052770",
    appId: "1:824021052770:web:98d332339ff4045c3ad03b",
    measurementId: "G-G87SZTP5LE"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export {auth , db , storage}
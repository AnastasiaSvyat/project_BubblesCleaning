import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as firebase from 'firebase'
import firebase from 'firebase/app'




const firebaseConfig ={
    apiKey: "AIzaSyBEPa8WjzApRYH7DXWlTGfjxHtDzfTZ5aw",
    authDomain: "bubblecleaning-7c87c.firebaseapp.com",
    databaseURL: "https://bubblecleaning-7c87c-default-rtdb.firebaseio.com",
    projectId: "bubblecleaning-7c87c",
    storageBucket: "bubblecleaning-7c87c.appspot.com",
    messagingSenderId: "29569113127",
    appId: "1:29569113127:web:436febab4a8d302b980202",
    measurementId: "G-QMKLQ075MZ"
}
firebase.initializeApp(firebaseConfig)

ReactDOM.render(<App />,document.getElementById('root'));


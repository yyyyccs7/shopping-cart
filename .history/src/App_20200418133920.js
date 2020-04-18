import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAveZr3NrMhM5G2a1IDdMGsfDsjl7F8fCU",
  authDomain: "shopping-cart-yzp.firebaseapp.com",
  databaseURL: "https://shopping-cart-yzp.firebaseio.com",
  projectId: "shopping-cart-yzp",
  storageBucket: "shopping-cart-yzp.appspot.com",
  messagingSenderId: "27746721661",
  appId: "1:27746721661:web:415a00bf6a3527aedaf614",
  measurementId: "G-2663GGKKZ5"
};

firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

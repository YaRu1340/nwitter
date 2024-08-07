import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import App from './App';
=======
import App from './components/App';
import firebase from "./firebase";
console.log(firebase);
>>>>>>> fe4798c (1.0 Initialization)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

//Configuration de la connexion à la DB.
//Tout ce code se récupère sur l'interface de firebase.
//Aucun travail supplémentaire à effectuer ici.
//Début block donné
var config = {
    apiKey: "AIzaSyCmi6R6Va-Jms5-umQdZ6BC7NXWQf5zUYc",
    authDomain: "my-project-1523863166592.firebaseapp.com",
    databaseURL: "https://my-project-1523863166592.firebaseio.com",
    projectId: "my-project-1523863166592",
    storageBucket: "my-project-1523863166592.appspot.com",
    messagingSenderId: "736478464920"
  };

  firebase.initializeApp(config);
  //Fin block donné

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

import React, { Component } from 'react';
import reactLogo from './logo.svg';
import firebaseLogo from './firebase.png';

import './App.css';
import * as firebase from 'firebase';

class App extends Component {
  constructor(){
    super();
    // Valeur initiale de speed: 10
    this.state = {
      speed: 10
    };
  }

  componentDidMount() {
    // F I R E B A S E
    const rootRef = firebase.database().ref();
    const speedRef = rootRef.child('speed');
    speedRef.on('value', snap => {
      this.setState({
        // le state speed prends la valeur de la DB une fois le composant monté.
        // ainsi, à chaque fois que la valeur est changée sur la DB (je t'ai envoyé les droits)
        // la valeur est push ici et la page se recharge automatiquement
        speed: snap.val()
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={reactLogo} className="App-logo" alt="logo" />
          <img src={firebaseLogo} className="App-logo" alt="logo" />
          <h1 className="App-title">React and Firebase working dynamically</h1>
          <h2 className="App-title">La Capsule experiments</h2>
        </header>
        <p className="App-intro">
          {this.state.speed}
        </p>
      </div>
    );
  }
}

export default App;

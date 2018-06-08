import React, {Component} from 'react';
import reactLogo from './logo.svg';
import firebaseLogo from './firebase.svg';
import './App.css';
import * as firebase from 'firebase';
import admin from 'firebase-admin';



class App extends Component {
  constructor() {
    super();
    this.state = {
      speed: 10,
      value: 0
    };
  }


  handleChange = (event) => this.setState({value: event.target.value});

  handleSubmit = (event) => {
    event.preventDefault();
    firebase.firestore().collection("test").doc("enfant").set({speed: this.state.value})
    .then(function() {
      console.log('SUCCESS');
    }).catch(function(error) {
      console.error("Error writing document: ", error);
    });
  }

  componentDidMount() {
    firebase.firestore().collection('test').doc('enfant').onSnapshot({
      includeMetadataChanges: true
    }, doc => {
      this.setState({speed: doc.data().speed});
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={reactLogo} className="App-logo-spin" alt="logo"/>
          <img src={firebaseLogo} className="App-logo-bounce" alt="logo"/>
          <h1 className="App-title-h1">React and Firebase working dynamically</h1>
          <h2 className="App-title-h2">La Capsule experiments</h2>
        </header>
        <p className="App-intro">
          {this.state.speed}
        </p>
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>This button will ONLY change DB's value</p>
            <input type="number" value={this.state.value} onChange={this.handleChange} className="input"/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;

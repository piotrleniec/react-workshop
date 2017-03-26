import React, { Component } from 'react';
import Lunch from './components/Lunch'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { lunches: [] }
  }

  componentDidMount() {
    fetch('/lunches.json')
      .then(response => response.json())
      .then(lunches => { this.setState({ lunches }) })
  }

  removeLunch = lunchId => {
    this.setState({
      lunches: this.state.lunches.filter(lunch => lunch.id !== lunchId)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {this.state.lunches.map(lunch => (
          <div key={lunch.id} className="col-xs-6">
            <Lunch
              lunch={lunch}
              onCloseClick={() => { this.removeLunch(lunch.id) }}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default App;

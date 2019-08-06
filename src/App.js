import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Countries from './components/Countries'
import Slot from './components/Slot'

class App extends Component {
  constructor() {
    super()

    this.state = {
      showCountries: true
    }
  }

  hideCountries() {
    this.setState({
      showCountries: false
    })
  }

  showCountries() {
    this.setState({
      showCountries: true
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <span>Show:</span>

          <div>
            <button onClick={this.showCountries.bind(this)}>Countries</button>

            <span> </span>

            <button onClick={this.hideCountries.bind(this)}>Slot</button>
          </div>

          {this.state.showCountries ? <Countries /> : <Slot />}
        </header>
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import logo from './logo.svg'
import './App.css'
import routes from './routes'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to="/">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>

            <span>Show:</span>

            <div className="mb-2">
              <Link className="btn btn-info" to="/countries/">
                Countries
              </Link>{' '}
              <Link className="btn btn-info" to="/slot/">
                Slot
              </Link>
            </div>

            <Switch>
              {routes.map((route, i) => (
                <Route
                  exact={route.exact}
                  path={route.path}
                  render={props => <route.component {...props} />}
                  key={i}
                />
              ))}
            </Switch>
          </header>
        </div>
      </Router>
    )
  }
}

export default App

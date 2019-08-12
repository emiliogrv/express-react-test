import React, { Component } from 'react'

class Error404 extends Component {
  constructor({ location }) {
    super()

    this.state = {
      location
    }
  }

  render() {
    return (
      <div>
        <h3>
          No match for <code>{this.state.location.pathname}</code>
        </h3>
      </div>
    )
  }
}

export default Error404

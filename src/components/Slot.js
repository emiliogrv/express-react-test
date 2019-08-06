import React, { Component } from 'react'

import API from '../utils/API'

class Countries extends Component {
  constructor() {
    super()

    this.state = {
      currentCoins: 10,
      prize: 0,
      result: null,
      initialized: false
    }
  }

  async onSpinHandler() {
    const {
      data: { currentCoins, prize, result }
    } = await API.get(
      'https://node-test-emiliogrv.herokuapp.com/api/v1/slot-machine',
      {
        params: { currentCoins: this.state.currentCoins }
      }
    )

    this.setState({ currentCoins, prize, result, initialized: true })
  }

  render() {
    const container = (
      <div>
        <p>You won {this.state.prize} coins</p>

        <p>
          Result:
          {JSON.stringify(this.state.result, null, 2).replace(/{|}|"/gi, '')}
        </p>
      </div>
    )

    return (
      <div>
        <button onClick={this.onSpinHandler.bind(this)}>Spin</button>

        <h1>You have {this.state.currentCoins} coins</h1>

        {this.state.currentCoins ? null : <h1>:(</h1>}

        {this.state.initialized ? container : null}
      </div>
    )
  }
}

export default Countries

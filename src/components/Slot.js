import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

import API from '../utils/API'

import loading from './partials/loading'

class Countries extends Component {
  constructor() {
    super()

    this.state = {
      currentCoins: 10,
      initialized: false,
      loading: false,
      prize: 0,
      result: null
    }
  }

  async spinHandler() {
    this.setState({ loading: true })

    const {
      data: { currentCoins, prize, result }
    } = await API.get(
      'https://node-test-emiliogrv.herokuapp.com/api/v1/slot-machine',
      {
        params: { currentCoins: this.state.currentCoins }
      }
    )

    this.setState({
      currentCoins,
      initialized: true,
      loading: false,
      prize,
      result
    })
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
        <Button variant="info" onClick={this.spinHandler.bind(this)}>
          Spin
        </Button>

        <h1>You have {this.state.currentCoins} coins</h1>

        {this.state.currentCoins ? null : <h1>:(</h1>}

        {this.state.initialized ? container : null}

        {loading(this.state.loading)}
      </div>
    )
  }
}

export default Countries

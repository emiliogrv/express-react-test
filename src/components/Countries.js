import React, { Component } from 'react'
import { Form, ListGroup } from 'react-bootstrap'
import { debounce } from 'lodash'

import API from '../utils/API'

import loading from './partials/loading'

class Countries extends Component {
  constructor() {
    super()

    this.state = {
      countries: [],
      filter: '',
      loading: false
    }

    this.getCountries = debounce(this.getCountries.bind(this), 850)
  }

  onChangeHandler(e) {
    const name = e.target.value.toString().toLowerCase()

    if (name) {
      this.getCountries(name)
    } else {
      this.setCountries()
    }
  }

  getCountries(name) {
    this.setState({ loading: true })

    API.get('https://node-test-emiliogrv.herokuapp.com/api/v1/countries', {
      params: { names: [name] }
    }).then(({ data }) => {
      if (data.length) {
        data.forEach((country, index) => {
          data[index].nameLowerCase = country.name.toLowerCase()
        })
      } else {
        data = [{ name: 'Without match', nativeName: ':(' }]
      }

      this.setCountries(data)
    })
  }

  setCountries(data = []) {
    this.setState({ countries: data, loading: false })
  }

  render() {
    const list = this.state.countries.map((country, indexC) => (
      <ListGroup.Item
        key={indexC}
        className="text-dark"
        variant={indexC % 2 ? 'light' : 'dark'}
      >
        <p>{country.name}</p>

        <small>{country.nativeName}</small>
      </ListGroup.Item>
    ))

    return (
      <div className="container">
        <Form.Control
          className="mb-5"
          disabled={this.state.loading}
          type="text"
          placeholder="Search Country"
          onChange={this.onChangeHandler.bind(this)}
        />

        <ListGroup>{list}</ListGroup>

        {loading(this.state.loading)}
      </div>
    )
  }
}

export default Countries

import React, { Component } from 'react'

import API from '../utils/API'

class Countries extends Component {
  constructor() {
    super()

    this.state = {
      countries: [],
      filter: ''
    }
  }

  onChangeHandler(e) {
    this.setState({
      filter: e.target.value.toString().toLowerCase()
    })
  }

  render() {
    const list = this.state.countries
      .filter(
        country =>
          this.state.filter === '' ||
          country.nameLowerCase.includes(this.state.filter)
      )
      .map((country, indexC) => (
        <div key={indexC}>
          <p>{country.name}</p>

          <small>{country.nativeName}</small>

          <hr />
        </div>
      ))

    return (
      <div>
        <input
          value={this.state.input}
          type="text"
          placeholder="Search Country"
          onChange={this.onChangeHandler.bind(this)}
        />

        {list}
      </div>
    )
  }

  async componentDidMount() {
    const { data } = await API.get('https://restcountries.eu/rest/v2/all')

    data.forEach((country, index) => {
      data[index].nameLowerCase = country.name.toLowerCase()
    })

    this.setState({ countries: data })
  }
}

export default Countries

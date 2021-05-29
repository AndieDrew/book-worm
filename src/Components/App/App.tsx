import React, { Component } from 'react'
import { getLists, getTypeOf } from '../../api-calls'

import Navbar from '../Navbar/Navbar'
import './App.css';

class App extends Component {
  constructor(props: {}) {
    super(props)
    this.state = {
      lists: [],
    }
  }

  componentDidMount() {
    getLists()
    .then(data => this.setState({ lists: data.results }))

// This is only here as a test
    getTypeOf( "hardcover-fiction" )
    .then(data => console.log(data))
  }

  render() {
    return (
      <main className="App">
        <Navbar />
      </main>
    )
  }
}

export default App;

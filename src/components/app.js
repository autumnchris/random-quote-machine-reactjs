import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quotes: []
    };
  }

  componentDidMount() {
    axios.get('.././src/db/quotes.min.json').then((data) => {
      this.setState({ quotes: data.data });
    });
  }

  render() {
    return (
      <div className="container-fluid text-center">
        <header>
          <h1>Inspirational Quotes</h1>
        </header>
        <footer>Coded by <a href="../portfolio" target="_blank">Autumn Bullard</a></footer>
      </div>
    );
  }
}

import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      randomQuote: {}
    };
  }

  newQuote() {
    const randomQuote = this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)];
    this.setState({ randomQuote });
  }

  componentDidMount() {
    axios.get('.././src/db/quotes.min.json').then((data) => {
      this.setState({ quotes: data.data });
      this.newQuote();
    });
  }

  render() {
    return (
      <div className="container-fluid text-center">
        <header>
          <h1>Inspirational Quotes</h1>
        </header>
        <main>
          <div className="well center-block">
            <span className="fa fa-quote-left"></span><q>&nbsp;{this.state.randomQuote.quote}&nbsp;</q><span className="fa fa-quote-right"></span>
            <div id="source">&mdash; {this.state.randomQuote.source}</div>
          </div>
        </main>
        <footer>Coded by <a href="../portfolio" target="_blank">Autumn Bullard</a></footer>
      </div>
    );
  }
}

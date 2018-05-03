import React, { Component } from 'react';
import axios from 'axios';
import Quotes from '.././db/quotes.min.json';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      randomQuote: {}
    };
  }

  getQuote() {
    const randomQuote = this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)];
    this.setState({ randomQuote });
  }

  componentDidMount() {
    axios.get(Quotes).then(data => {
      this.setState({ quotes: data.data });
      this.getQuote();
    }).catch(() => {
      document.querySelector('.success').style.display = 'none';
      document.querySelector('.error-message').style.display = 'block';
    });
  }

  render() {
    return (
      <div className="body">
        <div className="success">
          <header>
            <h1>Inspirational Quotes</h1>
          </header>
          <main>
            <div className="card">
              <div className="quote">
                <span className="fa fa-quote-left"></span>
                <q> {this.state.randomQuote.quote} </q>
                <span className="fa fa-quote-right"></span>
              </div>
              <div className="source">&mdash; {this.state.randomQuote.source}</div>
              <div className="tweet-button">
                <a className="tweet" href={`https://twitter.com/intent/tweet?text="${this.state.randomQuote.quote}" — ${this.state.randomQuote.source}`} target="_blank"><span className="fab fa-twitter"></span> Tweet</a>
              </div>
            </div>
            <button type="button" className="new-quote" aria-label="load new quote" title="New Quote" onClick={() => this.getQuote()}>
              <span className="fa fa-redo-alt fa-2x"></span>
            </button>
          </main>
          <footer>Coded by <a href="../portfolio" target="_blank">Autumn Bullard</a></footer>
        </div>
        <div className="error-message"><span className="fa fa-exclamation-triangle fa-lg fa-fw"></span> Unable to load a new quote.</div>
      </div>
    );
  }
}

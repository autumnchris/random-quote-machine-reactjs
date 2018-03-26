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
    axios.get(Quotes).then((data) => {
      this.setState({ quotes: data.data });
      this.getQuote();
    }).catch((error) => {
      document.querySelector('.success').style.display = 'none';
      document.querySelector('.error').style.display = 'block';
    });
  }

  render() {
    return (
      <div className="container-fluid text-center">
        <div className="success">
          <header>
            <h1>Inspirational Quotes</h1>
          </header>
          <main>
            <div className="well center-block">
              <span className="fa fa-quote-left"></span>
              <q> {this.state.randomQuote.quote} </q>
              <span className="fa fa-quote-right"></span>
              <div className="source">&mdash; {this.state.randomQuote.source}</div>
              <div className="text-right">
                <a className="btn tweet" href={`https://twitter.com/intent/tweet?text="${this.state.randomQuote.quote}" — ${this.state.randomQuote.source}`} target="_blank"><span className="fa fa-twitter fa-lg"></span> Tweet</a>
              </div>
            </div>
            <button type="button" className="btn btn-lg new-quote" title="New Quote" onClick={() => this.getQuote()}>
              <span className="fa fa-repeat fa-2x"></span>
              <span className="sr-only">load new quote</span>
            </button>
          </main>
          <footer>Coded by <a href="../portfolio" target="_blank">Autumn Bullard</a></footer>
        </div>
        <div className="alert alert-warning error"><span className="fa fa-warning fa-lg fa-fw"></span> Unable to load a new quote.</div>
      </div>
    );
  }
}

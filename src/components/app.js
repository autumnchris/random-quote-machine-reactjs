import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      source: '',
      quoteCardStyle: {display: 'none'},
      errorStyle: {display: 'none'}
    };
  }

  getQuote() {
    axios.get('/api/new-quote').then(randomQuote => {
      this.setState({
        quote: randomQuote.data.quote,
        source: randomQuote.data.source,
        quoteCardStyle: {display: 'block'}
      });
    }).catch(() => {
      this.setState({
        errorStyle: {display: 'block'}
      });
    });
  }

  componentDidMount() {
    this.getQuote();
  }

  render() {
    return (
      <main>
        <div className="card" style={this.state.quoteCardStyle}>
          <div className="quote">
            <span className="fa fa-quote-left"></span>
            <q> {this.state.quote} </q>
            <span className="fa fa-quote-right"></span>
          </div>
          <div className="source">&mdash; {this.state.source}</div>
          <div className="tweet-container">
            <a className="button tweet" href={`https://twitter.com/intent/tweet?text="${this.state.quote}" — ${this.state.source}`} target="_blank"><span className="fab fa-twitter fa-fw"></span> Tweet</a>
          </div>
        </div>
        <p className="message error-message" style={this.state.errorStyle}><span className="fa fa-exclamation-circle fa-lg fa-fw"></span> Unable to load a new quote at this time.</p>
        <button type="button" className="button new-quote" onClick={() => this.getQuote()}>New Quote</button>
      </main>
    );
  }
}

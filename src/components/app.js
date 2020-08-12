import React from 'react';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      source: '',
      loadingError: false
    };
  }

  getQuote() {
    axios.get('/api/new-quote').then(randomQuote => {
      this.setState({
        quote: randomQuote.data.quote,
        source: randomQuote.data.source,
        loadingError: false
      });
    }).catch(() => {
      this.setState({
        loadingError: true
      });
    });
  }

  componentDidMount() {
    this.getQuote();
  }

  render() {

    if (this.state.loadingError) {
      return (
        <p className="message error-message"><span className="fa fa-exclamation-circle fa-lg fa-fw"></span> Unable to load a new quote at this time.</p>
      );
    }
    else {
      return (
        <React.Fragment>
          <div className="quote-container">
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
          <button type="button" className="button new-quote" onClick={() => this.getQuote()}>New Quote</button>
        </React.Fragment>
      );
    }
  }
}

export default App;

import React from 'react';
import axios from 'axios';
import LoadingSpinner from './loading-spinner';
import QuoteContainer from './quote-container';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      randomQuote: {
        quote: '',
        source: ''
      },
      isLoading: true,
      loadingError: false
    };
    this.getQuote = this.getQuote.bind(this);
  }

  fetchQuotes() {
    axios.get('https://autumnchris-quotes.herokuapp.com/api/quotes').then(response => {
      this.setState({
        quotes: response.data,
        isLoading: false
      });
      this.getQuote();
    }).catch(() => {
      this.setState({
        isLoading: false,
        loadingError: true
      });
    });
  }

  getQuote() {
    const randomQuote = this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)];
    this.setState({
      randomQuote: {
        quote: randomQuote.quote,
        source: randomQuote.source
      }
    });
  }

  componentDidMount() {
    this.fetchQuotes();
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <h1>Inspirational Quotes</h1>
        </header>
        <main>
          {this.state.isLoading ? <LoadingSpinner /> : <QuoteContainer randomQuote={this.state.randomQuote} getQuote={this.getQuote} loadingError={this.state.loadingError} />}
        </main>
        <footer>Created by <a href="https://autumnbullard-portfolio.herokuapp.com" target="_blank">Autumn Bullard</a> &copy; {new Date().getFullYear()}</footer>
      </React.Fragment>
    );
  }
}

export default App;

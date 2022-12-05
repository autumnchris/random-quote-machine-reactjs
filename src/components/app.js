import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingSpinner from './Loading-Spinner';
import ErrorMessage from './Error-Message';
import QuoteContainer from './Quote-Container';

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(true);

  useEffect(() => {
    fetchQuotes();
  }, []);

  function fetchQuotes() {
    axios.get('https://autumnchris-quotes-api.onrender.com/api/quotes').then(response => {
      setQuotes(response.data);
      setLoadingStatus(false);
    }).catch(() => {
      setQuotes([]);
      setLoadingStatus(false);
    });
  }

  return (
    <React.Fragment>
      <header>
        <h1>Inspirational Quotes</h1>
      </header>
      <main>
        {loadingStatus ? <LoadingSpinner /> : quotes.length !== 0 ? <QuoteContainer quotes={quotes} /> : <ErrorMessage />}
      </main>
      <footer>Created by <a href="https://autumnchris.github.io/portfolio" target="_blank">Autumn Bullard</a> &copy; {new Date().getFullYear()}</footer>
    </React.Fragment>
  );
}

export default App;

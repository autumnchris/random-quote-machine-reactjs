import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import QuoteContainer from './components/QuoteContainer';

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
      <Header />
      <main>
        {loadingStatus && quotes.length === 0 ? <LoadingSpinner /> : quotes.length !== 0 ? <QuoteContainer quotes={quotes} /> : <ErrorMessage />}
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;

import React, { useState, useEffect } from 'react';

const QuoteContainer = ({ quotes }) => {
  const [randomQuote, setRandomQuote] = useState({});

  useEffect(() => {
    getNewQuote();
  }, []);

  function getNewQuote() {
    const newRandomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    

    if (randomQuote._id !== newRandomQuote._id) {
      setRandomQuote(prevRandomQuote => {
        return {
          ...prevRandomQuote,
          quote: newRandomQuote.quote,
          source: newRandomQuote.source,
          _id: newRandomQuote._id
        };
      });
    }
    else {
      getNewQuote();
    }
  }

  return (
    <React.Fragment>
      <div className="quote-container">
        <div className="quote">
          <span className="fa-solid fa-quote-left fa-lg" aria-hidden="true"></span>
          <q> {randomQuote.quote} </q>
          <span className="fa-solid fa-quote-right fa-lg" aria-hidden="true"></span>
        </div>
        <div className="source">&mdash; {randomQuote.source}</div>
      </div>
      <div className="button-group">
        <button type="button" className="button new-quote" onClick={() => getNewQuote()}>New Quote</button>
      </div>
    </React.Fragment>
  );
}

export default QuoteContainer;

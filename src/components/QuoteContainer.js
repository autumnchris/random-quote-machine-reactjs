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
          <span className="fa fa-quote-left" aria-hidden="true"></span>
          <q> {randomQuote.quote} </q>
          <span className="fa fa-quote-right" aria-hidden="true"></span>
        </div>
        <div className="source">&mdash; {randomQuote.source}</div>
        <div className="tweet-container">
          <a className="button tweet" href={`https://twitter.com/intent/tweet?text="${randomQuote.quote}" — ${randomQuote.source}`} target="_blank"><span className="fab fa-twitter fa-fw" aria-hidden="true"></span> Tweet</a>
        </div>
      </div>
      <button type="button" className="button new-quote" onClick={() => getNewQuote()}>New Quote</button>
    </React.Fragment>
  );
}

export default QuoteContainer;

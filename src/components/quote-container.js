import React from 'react';

const QuoteContainer = ({ randomQuote, getQuote, loadingError }) => {

  if (loadingError) {
    return <p className="message error-message"><span className="fa fa-exclamation-circle fa-lg fa-fw"></span> Unable to load a new quote at this time.</p>;
  }
  else {
    return (
      <React.Fragment>
        <div className="quote-container">
          <div className="quote">
            <span className="fa fa-quote-left"></span>
            <q> {randomQuote.quote} </q>
            <span className="fa fa-quote-right"></span>
          </div>
          <div className="source">&mdash; {randomQuote.source}</div>
          <div className="tweet-container">
            <a className="button tweet" href={`https://twitter.com/intent/tweet?text="${randomQuote.quote}" — ${randomQuote.source}`} target="_blank"><span className="fab fa-twitter fa-fw"></span> Tweet</a>
          </div>
        </div>
        <button type="button" className="button new-quote" onClick={() => getQuote()}>New Quote</button>
      </React.Fragment>
    );
  }
}

export default QuoteContainer;

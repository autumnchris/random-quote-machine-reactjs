import React, { Component } from 'react';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        {
          quote: 'People think of education as something they can finish.',
          source: 'Isaac Asimov'
        },
        {
          quote: 'Blowing out someone else\'s candle won\'t make yours shine brighter.',
          source: 'anonymous'
        },
        {
          quote: 'Every first draft is perfect, because all a first draft has to do is exist.',
          source: 'Jane Smiley'
        },
        {
          quote: 'I want to be around people that do things. I don\'t want to be around people anymore that judge or talk about what people do. I want to be around people that dream and support and do things.',
          source: 'Amy Poehler'
        },
        {
          quote: 'Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.',
          source: 'Albert Einstein'
        },
        {
          quote: 'The miracle is this: the more we share the more we have.',
          source: 'Leonard Nimoy'
        },
        {
          quote: 'Change will not come if we wait for some other person or some other time. We are the ones we\'ve been waiting for. We are the change that we seek.',
          source: 'Barack Obama'
        },
        {
          quote: 'Maybe your weird is my normal. Who\'s to say?',
          source: 'Nicki Minaj'
        },
        {
          quote: 'Gossip needn\'t be false to be evil. There\'s a lot of truth that shouldn\'t be passed around.',
          source: 'Frank A. Clark'
        },
        {
          quote: 'The more you know, the more you can do. However, you don\'t need to know everything to get things done. Just a bit of know-how is enough to get started on most projects, you can learn the rest along the way. Don\'t be afraid to break stuff, it\'s all virtual anyway.',
          source: 'Yann Dauphin on advice for new programmers'
        },
        {
          quote: 'Find a language you love, make cool stuff with it, and never be afraid to experiment.',
          source: 'Tom Heinan on advice for new programmers'
        },
        {
          quote: 'Life is like riding a bicycle, in order to keep your balance, you must keep moving.',
          source: 'Albert Einstein'
        },
        {
          quote: 'Some people should remain a part of your past and not be a part of your future.',
          source: 'Steven Aitchison'
        },
        {
          quote: 'If you\'re going to do free work, do your own stories and post them online. Own your free work.',
          source: 'Skottie Young'
        },
        {
          quote: 'Sometimes you can only find Heaven by slowly backing away from Hell.',
          source: 'Carrie Fisher'
        },
        {
          quote: 'People want to believe gender is something that\'s essential, and people repeat these essentialist ideas all the time. \'Oh, women do that\' and \'Oh, men do that\' and the reality is that all women don\'t anything. We as individuals do what we do, you know, and sometimes that\'s informed by gender and sometimes it\'s just who we are. And I think all that just makes people really, really uncomfortable because they don\'t want to think about who they are.',
          source: 'Laverne Cox'
        },
        {
          quote: 'Stay afraid, but do it anyway. What\'s important is the action. You don\'t have to wait to be confident. Just do it and eventually the confidence will follow.',
          source: 'Carrie Fisher'
        },
        {
          quote: 'I believe that, as long as there is plenty, poverty is evil.',
          source: 'Robert F. Kennedy'
        },
        {
          quote: 'Progress is a nice word. But change is its motivator. And change has its enemies.',
          source: 'Robert F. Kennedy'
        },
        {
          quote: 'Tragedy is a tool for the living to gain wisdom, not a guide by which to live.',
          source: 'Robert F. Kennedy'
        },
        {
          quote: 'Coming out is the most political thing you can do.',
          source: 'Harvey Milk'
        },
        {
          quote: 'Hope will never be silent.',
          source: 'Harvey Milk'
        },
        {
          quote: 'All young people regardless of sexual orientation or identity, deserve a safe and supportive environment in which to achieve their full potential.',
          source: 'Harvey Milk'
        }
      ],
      randomQuote: {}
    };
  }

  getQuote() {
    const randomQuote = this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)];
    this.setState({ randomQuote });
  }

  componentDidMount() {
    this.getQuote();
  }

  render() {
    return (
      <div className="body">
        {/* HEADER */}
        <header>
          <h1>Inspirational Quotes</h1>
        </header>
        <main>
          <div className="card">
            {/* QUOTE & SOURCE */}
            <div className="quote">
              <span className="fa fa-quote-left"></span>
              <q> {this.state.randomQuote.quote} </q>
              <span className="fa fa-quote-right"></span>
            </div>
            <div className="source">&mdash; {this.state.randomQuote.source}</div>
            {/* TWEET BUTTON */}
            <div className="tweet-button">
              <a className="tweet" href={`https://twitter.com/intent/tweet?text="${this.state.randomQuote.quote}" — ${this.state.randomQuote.source}`} target="_blank"><span className="fab fa-twitter"></span> Tweet</a>
            </div>
          </div>
          {/* NEW QUOTE BUTTON */}
          <button type="button" className="new-quote" aria-label="load new quote" title="New Quote" onClick={() => this.getQuote()}>
            <span className="fa fa-redo-alt fa-2x"></span>
          </button>
        </main>
        {/* FOOTER */}
        <footer>Coded by <a href="https://autumnbullard-portfolio.herokuapp.com" target="_blank">Autumn Bullard</a></footer>
      </div>
    );
  }
}

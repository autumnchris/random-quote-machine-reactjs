import React from 'react';

const ErrorMessage = (props) => {
  return <p className="message error-message"><span className="fa-solid fa-circle-exclamation fa-lg fa-fw" aria-hidden="true"></span> Unable to load a new quote at this time.</p>;
}

export default ErrorMessage;

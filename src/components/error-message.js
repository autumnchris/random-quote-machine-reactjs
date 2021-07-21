import React from 'react';

const ErrorMessage = (props) => {
  return <p className="message error-message"><span className="fa fa-exclamation-circle fa-lg fa-fw"></span> Unable to load a new quote at this time.</p>;
}

export default ErrorMessage;

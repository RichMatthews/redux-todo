import React from 'react';

const Button = ({ buttonName, onClick, className}) => (
  <button className={className} onClick={onClick}>
    {buttonName}
  </button>
)

export default Button;

import React from 'react';

const Filter = ({ onChange, text }) => (
  <div>
    <input
      placeholder={text}
      onChange={onChange}
    />
  </div>
)

export default Filter;

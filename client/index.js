import React from 'react';
import ReactDOM from 'react-dom';
import Example from './components/Example';

class Component extends React.Component{
  render(){
    return (
      <Example />
      )
  };
};

ReactDOM.render(<Component />,
    document.getElementById('content'));

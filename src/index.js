import React from 'react';
import ReactDOM from 'react-dom';

class Boilerplate extends React.Component{

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render(){
    return (
       <div>
       Working :)
       </div>
      )
  };
};

ReactDOM.render(<Boilerplate />,
    document.getElementById('content'));

import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import Channel from './components/channel'
import MessageDetail from './components/messageDetail'
import Footer from './components/footer';
import MessagingApp from './messagingApp'

class Main extends React.Component{

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render(){
    return (
       <div>
       Working
       <Main />
       </div>
      )
  };
};

ReactDOM.render(<MessagingApp />,
    document.getElementById('content'));

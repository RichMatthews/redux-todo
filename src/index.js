import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';

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

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={MessagingApp}>
        <Route path="general" channel="General" component={Channel}></Route>
        <Route path="random" channel="Random" component={Channel}></Route>
        <Route path="tech" channel="Tech" component={Channel}></Route>
      </Route>
    </Router>,
    document.getElementById('content'));

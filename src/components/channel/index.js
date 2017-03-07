import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';

export default class Channel extends React.Component{

  render(){
    return (
      <h1 id="channelHeading"> {this.props.route.channel} </h1>
    )
  }
}

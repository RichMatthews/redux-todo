import React from 'react';
import ReactDOM from 'react-dom';

export default class Channel extends React.Component{

  render(){
    return (
      <h1 id="channelHeading"> {this.props.channelValue} </h1>
    )
  }
}

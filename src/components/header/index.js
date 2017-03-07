import React from 'react';
//import './index.scss';
import Search from './components/search'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="header">
        <span> Home </span>
        <span> About </span>
        <span> Login </span>
        <Search /> 
      </div>
    );
  }
}

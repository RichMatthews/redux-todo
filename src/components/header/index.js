import React from 'react';
//import './styles.css'
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
        <button />
        <Search />
      </div>
    );
  }
}

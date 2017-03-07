import React from 'react';
export default class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      on: true
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch = (e) => {
    this.setState(prevState => ({
      on: !prevState.on
    }));
  }

  render() {
    return (
      <div className="search">
        <input type="text" />
        <button className="searchButton" onClick={(e) => this.handleSearch(e)}>{this.state.on ? 'Search' : null}</button>
      </div>
    );
  }
}

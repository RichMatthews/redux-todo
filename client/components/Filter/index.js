import React from 'react';

class Filter extends React.Component {
  state = {
    input: ''
  }

  handleChange = (event) => this.setState({ input: event.target.value })

  render(){
    const { items } = this.props;
    const { input } = this.state;
    return(
      <div>
        <input
          placeholder="search for an item"
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default Filter;

import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="footer">
        <ul id="facebook"><a href="https://www.facebook.com">Facebook</a></ul>
        <ul id="twitter"><a href="https://www.twitter.com">Twitter</a></ul>
        <ul id="pinterest"><a href="https://www.pinterest.com">Pinterest</a></ul>
      </div>
    );
  }
}

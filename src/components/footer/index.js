import React from 'react';
import './index.scss';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="footer">
        <span id="facebook"><a href="https://www.facebook.com">Facebook</a></span>
        <span id="twitter"><a href="https://www.twitter.com">Twitter</a></span>
        <span id="pinterest"><a href="https://www.pinterest.com">Pinterest</a></span>
      </div>
    );
  }
}

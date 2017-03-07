import React from 'react';
import './index.scss';

export default class MessageDetail extends React.Component {

  render() {
    return (
      <div className="messageDetail">
        <div className="messageForm" >
            <input id="senderMsgName" value={this.props.nameValue} onChange={this.props.handleNameChange} placeholder="Name"/>
            <input id="senderMsgBody" value={this.props.bodyValue} onChange={this.props.handleBodyChange} placeholder="Body"/>
        </div>
      </div>
    );
  }
}

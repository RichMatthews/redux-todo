import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
import './index.scss';

import Header from '../components/header';
import Channel from '../components/channel'
import MessageDetail from '../components/messageDetail'
import Footer from '../components/footer';

import { rootRef, firebase_init, storage } from '../../firebase/firebase_config.js';
let firebase = require('firebase');


export default class MessagingApp extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      all_messages: [],
      nameValue: '',
      bodyValue: ''
    };

    this.getMessagesAndSetState = this.getMessagesAndSetState.bind(this);
  }

  getMessagesAndSetState = () => {
    this.pullMessagesFromDb('/messages/' + this.props.location.query.channelName + '/').then((messages) => {
      let all_messages = Object.keys(messages.val()).map(function(key) {
       return messages.val()[key];
     });
     this.setState({all_messages: all_messages});
    });
  }

  componentDidMount = () => {
    this.getMessagesAndSetState();
  }

  pullMessagesFromDb = (query) => {
    return new Promise((resolve, reject) => {
      firebase.database().ref(query).on('value', resolve);
    });
  }

  handleNameChange = (event) => {
    this.setState({nameValue: event.target.value})
  }

  handleBodyChange = (event) => {
    this.setState({bodyValue: event.target.value})
  }

  resetForm = () => {
    this.setState({nameValue: ''});
    this.setState({bodyValue: ''});
  }

  postMessageToDb = (channelName) => {
      let database = rootRef.child('messages/' + channelName);
      let chat  = { name: this.state.nameValue, body: this.state.bodyValue };
      database.push().set(chat).then(() => {
        this.getMessagesAndSetState();
      });
      this.resetForm();
  };

  clearMessages = () =>{
    this.setState({all_messages: []},() => this.getMessagesAndSetState());
  };

  render(){
    return (
       <div>
        <Header />
          <h1> Messaging App </h1>
                {this.props.children}
                <div id="container" >
                  <div id="links">
                    <h2> Channels </h2>
                    <Link id="generalLink" to={{ pathname: "general", query: { channelName: "general" } }} onClick={this.clearMessages}> General </Link>
                    <br />
                    <Link to={{ pathname: "random", query: { channelName: "random" } }} onClick={this.clearMessages}> Random </Link>
                    <br />
                    <Link to={{ pathname: "tech", query: { channelName: "tech" } }} onClick={this.clearMessages}> Tech </Link>
                    <br />
                    <Link to={{ pathname: "devs", query: { channelName: "devs" } }} onClick={this.clearMessages}> Devs </Link>
                    <br />
                    <Link to={{ pathname: "qa", query: { channelName: "qa" } }} onClick={this.clearMessages}> QA </Link>
                    <br />
                    <Link to={{ pathname: "ux", query: { channelName: "ux" } }} onClick={this.clearMessages}> UX </Link>
                    <br />
                    <Link to={{ pathname: "tech", query: { channelName: "tech" } }} onClick={this.clearMessages}> JavaScript </Link>
                  </div>
                  <div id="messageContainer" >
                    <div id="messages">
                      {this.state.all_messages.map(function(msg, index){
                          return <div key={ index }><p id="msgName">{msg.name}</p><p id="msgBody">{msg.body}<span><button>Delete</button></span></p></div>
                      }, this)}
                      </div>
                    <MessageDetail
                      handleNameChange={this.handleNameChange.bind(this)}
                      handleBodyChange={this.handleBodyChange.bind(this)}
                      nameValue={this.state.nameValue}
                      bodyValue={this.state.bodyValue}
                      onChange={this.props.onChange}
                    />
                    <button className="postButton" onClick={() => this.postMessageToDb(this.props.location.query.channelName)}>Post</button>
                  </div>
                </div>
          <Footer />
       </div>
      )
  };
};

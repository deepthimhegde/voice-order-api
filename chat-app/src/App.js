import React, { Component } from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import SpeechToText from './SpeechToText'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      mic_status: false
    }
  }
  handleNewMessage = (text) => {
    this.setState({
      messages: [...this.state.messages, { me: true, author: "Me", body: text }],
    })
  }
  render() {
    return (
      <div className="App">
        <MessageList messages={this.state.messages} />
        <MessageForm onMessageSend={this.handleNewMessage} />
        <SpeechToText />
      </div>
    );
  }
  
}

export default App;

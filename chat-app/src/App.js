import React, { useState, useEffect } from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import SpeechToText from './SpeechToText';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [micStatusOff, setMicStatus] = useState(true);
  const [data, setData] = useState({
    data_stream: ""
  });

  const handleNewMessage = (text) => {
    setMessages([...messages, { me: true, author: "Me", body: text }]);
  };

  const changeMicStatus = (newStatus) => {
    setMicStatus(newStatus);
  };

  useEffect(() => {
    if (!micStatusOff) {
      fetch("/orders").then((res) =>
        res.json().then((data) => {
          // Setting data from the API
          setData({
            data_stream: data.data_stream
          });
        })
      );
    }
  }, [micStatusOff]);

  console.log('Mic status: ' + micStatusOff);
  console.log('API stream: ' + data.data_stream);
  console.log("Messages: ", messages)

  return (
    <div className="App">
      <MessageList messages={messages} />
      <MessageForm onMessageSend={handleNewMessage} />
      <SpeechToText mic_status={micStatusOff} onMicStatusChange={changeMicStatus} onVoiceMessageDetected={handleNewMessage} />
    </div>
  );
};

export default App;




// import React, { Component, useEffect, useState } from 'react';
// import MessageList from './MessageList';
// import MessageForm from './MessageForm';
// import SpeechToText from './SpeechToText'
// import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       messages: [],
//       mic_status: false
//     }
//   }
//   handleNewMessage = (text) => {
//     this.setState({
//       messages: [...this.state.messages, { me: true, author: "Me", body: text }],
//     })
//   }
//   changeMicStatus = (newStatus) => {   
//     this.setState({ mic_status: newStatus });
//   }
//   const [data, setdata] = useState({
//     message: ""
//   });
//   useEffect(() => {
//     // Using fetch to fetch the api from
//     // flask server it will be redirected to proxy
//     fetch("/").then((res) =>
//         res.json().then((data) => {
//             // Setting a data from api
//             setdata({
//                 name: data.Name,
//                 age: data.Age,
//                 date: data.Date,
//                 programming: data.programming,
//             });
//         })
//     );
//   }, []);

//   render() {
//     console.log('Mic status: ' + this.state.mic_status);
    
//     return (
//       <div className="App">
//         <MessageList messages={this.state.messages} />
//         <MessageForm onMessageSend={this.handleNewMessage} />
//         <SpeechToText mic_status={this.state.mic_status} onMicStatusChange={this.changeMicStatus}/>
//       </div>
//     );
//   }
  
// }

// export default App;

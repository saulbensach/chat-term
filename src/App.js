import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      text: '',
      reply: [
        {name: 'Pedro', content: 'Hola bro cuando tiempo'},
        {name: 'Pedro', content: 'hace años que no te veo'},
        {name: 'Pedro', content: 'espero no verte más tonto XD'},
      ]
    };
  }

  handleKeyPress = (event) => {
    switch (event.code) {
      case "Backspace":
        this.setState(state => ({
          text: state.text.substring(0, state.text.length - 1)
        }));
        break;
      case "AltLeft": 
      case "AltRight": 
      case "ShiftRight": 
      case "Tab":
      case "ControlLeft":
      case "ControlRight":
      case "Control":
      case "Quote":
      case "ShiftLeft": break;
      case "Enter":
        if(this.state.text.length > 1) {
          let tmp = this.state.reply;
          tmp.push({name: 'Saúl', content: this.state.text});
          this.setState(() => ({
            reply: tmp
          }));
        }
        this.setState(() => ({
          text: ''
        }));
        break;
      default:
        if(this.state.text.length < 60) {
          this.setState(state => ({
            text: state.text + event.key
          }));
        }
    }
    
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress, false);
  }

  createChatReplies() {
    let replies = [];
    for(let i = 0; i < this.state.reply.length; i++){
      replies.push(<li><span className="userReply">&lt; {this.state.reply[i].name} &gt; </span>{this.state.reply[i].content}</li>)
    }

    return replies;
  }

  render() {
    return (
      <div className="chatContainer">
          <div className="chatContactsContainer">
            <ul>
              <li>Pedro</li>
              <li>Manolo</li>
            </ul>
          </div>
          <div className="actualChatContainer">
            <div className="chatTextContainer">
              <ul>
                {this.createChatReplies()}
              </ul>
            </div>
            <div className="chatInputBox">
              <span className="text">{this.state.text}</span><span className="caret">a</span>
            </div> 
          </div>
        </div>
    );
  }
}

export default App;

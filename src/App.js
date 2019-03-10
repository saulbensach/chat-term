import React, { Component } from 'react';
import './App.css';

class App extends Component {
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
                <li>Me he dejado la compra en la basura</li>
                <li>menuda cabeza que tengo bro</li>
              </ul>
            </div>
            <div className="chatInputBox">
              <span className="text"></span><span className="caret">a</span>
            </div> 
          </div>
        </div>
    );
  }
}

export default App;

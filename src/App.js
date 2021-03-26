import React, { Component } from 'react';
import './App.css';
import SideBar from './Components/Sidebar/Sidebar.js';
import Chat from "./Components/Sidebar/Chat/Chat.js";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className = 'main'>
          <SideBar/>
          <Chat/>
        </div>
      </div>
    );
  }
}

export default App;

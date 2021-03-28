import React, { useState} from 'react';
import './App.css';
import SideBar from './Components/Sidebar/Sidebar.js';
import Chat from "./Components/Sidebar/Chat/Chat.js";
import Login from './Components/Login/Login.js';
function App(){
  const [user,setUser] = useState('rithik');

  return (
      <div className="app">
        {!user?<Login/>:
          (<div className = 'main'>
          <SideBar/>
          <Chat/>
          </div>)
        }
      </div>
  );
}

export default App;

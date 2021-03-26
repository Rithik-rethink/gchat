import React,{useState} from 'react'
import './Chat.css';
import {Avatar, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Messages from './Messages.js';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';


function Chat() {
    const [msg,setMsg] = useState('');
    const sendMessage = (e) =>{
        e.preventDefault();
        console.log('You typed>>',msg);
        setMsg('');
    }

    return (
        <div className = 'chat'>
            <div className = 'chat__header'>
                <Avatar src = 'https://avatars.githubusercontent.com/u/64438319?v=4'/>
                <div className = 'chat__headerInfo'>
                    <h3>Chat Name</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className = 'chat__headerRight'>
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className='chat__body'>
                <Messages/>
                <Messages/>
                <Messages/>
                <Messages/>
                <Messages/>
            </div>
            <div className='chat__footer'>
                <IconButton>
                    <EmojiEmotionsOutlinedIcon/>
                    </IconButton>
                <form>
                    <div className='chat__type'>
                        <input type ='text' value={msg} onChange ={e=>setMsg(e.target.value)} placeholder='Type a message'/>
                        <button onClick = {sendMessage}>Send a message</button>
                    </div>
                </form>
                <IconButton>
                    <MicOutlinedIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default Chat

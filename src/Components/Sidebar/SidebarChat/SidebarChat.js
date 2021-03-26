import React from 'react';
import './SidebarChat.css';
import { Avatar } from '@material-ui/core'

function SidebarChat() {
    return (
        <div className = 'sidebar__chat'>
            <Avatar/>
            <div className = 'chat__info'>
                <h3>Chat Name</h3>
                <p>Last message</p>
            </div>
        </div>
    )
}

export default SidebarChat

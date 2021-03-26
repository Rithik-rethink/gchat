import React from 'react'
import './Sidebar.css';
import SidebarChats from './SidebarChat/SidebarChat.js';
import MessageIcon from '@material-ui/icons/Message';
import { Avatar,IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

function Sidebar() {
    return (
        <div className = 'sidebar'>
            <div className = 'sidebar__header'>
                <Avatar src= 'https://avatars.githubusercontent.com/u/59759631?v=4'></Avatar>
                <div className = 'sidebar__headerright'>
                    <IconButton>
                        <MessageIcon/>
                    </IconButton>
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className = 'sidebar__search'>
                <div className = 'search__input'>
                    <div className = 'search__field'>
                        <SearchOutlinedIcon/>
                        <input type = 'text' placeholder = 'Search or start new chat'/>
                    </div>
                </div>

            </div>
            <div className = 'sidebar__chatlist'>
                <SidebarChats/>
                <SidebarChats/>
                <SidebarChats/>
                <SidebarChats/>
                <SidebarChats/>
                <SidebarChats/>
                <SidebarChats/>
                <SidebarChats/>
                <SidebarChats/>


            </div>
        </div>
    )
}

export default Sidebar

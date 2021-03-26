import React from 'react';
import './Chat.css';

function Messages() {
    return (
        <div>
            <div className={`chat__message ${false && 'chat__sender'}`}>
                <span className = 'chat__name'>Kedar Hegde
                    </span>
                    <p>Hey!</p>
                <span className ='chat__timestamp'>11:56 PM</span>
            </div>
        </div>
    )
}

export default Messages

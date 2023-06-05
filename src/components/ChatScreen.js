import React, { useState } from 'react'
import './ChatScreen.css'
import { Avatar } from '@mui/material';

function ChatScreen() {

    const [input, setInput] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        if(input !== ''){
            setMessages([...messages, { message: input}]);
            setInput('');
        }
    }

    const [messages, setMessages] = useState([
        {
            message: "You know, Kurisu, whenever I think about time travel, I can't help but imagine going back to the moment we first met"
        },
        {
            name: 'Makise',
            image: 'https://avatarfiles.alphacoders.com/326/326563.png',
            message: "Really? That's such a sweet thought"
        },
        {
            message: "It was like a serendipitous encounter"
        },
        {
            name: 'Makise',
            image: 'https://avatarfiles.alphacoders.com/326/326563.png',
            message: "Together, we're creating our own unique timeline—one filled with love, support, and shared dreams."
        }
    ]);

  return (
    <div className='chatScreen' >

            <p className='chat__match'>YOU MATCHED WITH MAKISE ON 16/06/2023</p>
            {messages.map((message) => (
                message.name ? (
                <div className='chat_screen_msg'>
                    <Avatar
                        className='chat__image'
                        src={message.image}
                        alt={message.name}
                        sx={{ width: 50, height: 50 }}
                    />
                    <p className='chat_other'>{message.message}</p>
                </div>
                ) : (
                    <div className='chat_screen_msg'>
                        <p className='chat_self'>{message.message}</p>
                    </div>
                )
            ))}

            <form className='chat__input'>
                <input value={input}
                onChange = {(e) => setInput(e.target.value)} className='chat__inputfield' type="text" placeholder='Type a message...'/>
                <button onClick={handleSubmit} type="submit" className='send_btn'>SEND</button>
            </form>
    </div>
  )
}

export default ChatScreen
import React from 'react'
import { Avatar } from '@mui/material';
import './Chat.css'
import { Link } from 'react-router-dom';

function Chat({name, msg, timestamp, pfp}) {
  return (
    <Link to={`/chat/${name}`}>
      <div className='chat'>
          <Avatar className='chat__image' src={pfp} sx={{ width: 60, height: 60 }}/>
          <div className='chat__details'>
              <h2>{name}</h2>
              <p>{msg}</p>
          </div>
          <p className='chat__timestamp'>{timestamp}</p>
      </div>
    </Link>
  )
}

export default Chat
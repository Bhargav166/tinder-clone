import React from 'react'
import Chat from './Chat'
import './Chats.css'

function Chats() {
  return (
    <div className='chats'>
      <Chat
        name='Makise'
        msg="My my, we've found ourselves engrossed in a scientific banter."
        timestamp='40 seconds ago'
        pfp='https://avatarfiles.alphacoders.com/326/326563.png'
      />
      <Chat
        name='Komi'
        msg='Hi! I hope we can share many meaningful moments together.'
        timestamp='1 hr ago'
        pfp='https://www.animesoulking.com/wp-content/uploads/2021/11/komi-shouko-740x414.jpg'
      />
      <Chat
        name='Kaguyu'
        msg="Let the conversations of love continue!"
        timestamp='2 days ago'
        pfp='https://cdn.myanimelist.net/images/characters/2/504723.jpg'
      />
    </div>
  )
}

export default Chats
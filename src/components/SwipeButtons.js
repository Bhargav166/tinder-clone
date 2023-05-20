import React from 'react'
import './SwipeButtons.css'

// Icons import
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';

function SwipeButton() {
  return (
    <div className='swipe_buttons'>
      <IconButton>
        <ReplayIcon fontSize='large' className='swipe_btn_replay'/>
      </IconButton>
      <IconButton>
        <CloseIcon fontSize='large' className='swipe_btn_close'/>
      </IconButton>
      <IconButton>
        <StarRateIcon fontSize='large' className='swipe_btn_star'/>
      </IconButton>
      <IconButton>
        <FavoriteIcon fontSize='large' className='swipe_btn_favorite'/>
      </IconButton>
      <IconButton>
        <FlashOnIcon fontSize='large' className='swipe_btn_flash'/>
      </IconButton>        
    </div>
  )
}

export default SwipeButton
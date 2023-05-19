import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@material-ui/icons/Forum';
import './Header.css'
import TinderLogo from '../images/tinder_logo.png'
import IconButton from '@mui/material/IconButton';

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon className='header_icons' fontSize='large' />
            </IconButton>
            <img src={TinderLogo} alt="tinder logo" className='tinder__logo' />

            <IconButton>
                <ForumIcon className='header_icons' fontSize='large' />
            </IconButton>
        </div>
    )
}

export default Header
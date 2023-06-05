import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@material-ui/icons/Forum';
import './Header.css'
import TinderLogo from '../images/tinder_logo.png'
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useNavigate } from 'react-router-dom'

function Header({ backButton }) {

    const navigate = useNavigate();

    return (
        <div className='header'>

            { backButton ? (
                <IconButton onClick={() => navigate(backButton)}>
                    <ArrowBackIosIcon className='header_icons' fontSize='large'/>
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon className='header_icons' fontSize='large' />
                </IconButton>
                )
            }

            <Link to='/'>  
                <img src={TinderLogo} alt="tinder logo" className='tinder__logo' />
            </Link>

            <Link to='/chat'>
                <IconButton>
                    <ForumIcon className='header_icons' fontSize='large' />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header
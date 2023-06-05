import React from 'react'
import Header from './Header'
import TinderCard from './TinderCard'
import SwipeButton from './SwipeButtons'
import './Home.css'


function Home() {
  return (
    <div className='home'>
        <Header />
        <TinderCard />
        <SwipeButton />
    </div>
  )
}

export default Home